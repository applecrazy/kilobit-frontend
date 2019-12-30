import React, { Component } from 'react'
import Router from 'next/router'
import Layout from '../components/layout'

import controller from '../controller'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			token: null,
			error: null
		}
	}

	componentDidMount() {
		const isAuth = controller.isAuthenticated()
		if (isAuth) Router.push('/feed')
	}

	changeState(e) {
		var newState = {}
		newState[e.target.name] = e.target.value
		this.setState(newState)
	}

	detectEnter(e) { 
		console.log(e.key)
		if (e.key === 'Enter') {
			this.submit()
			e.preventDefault()
		}
	}

	async submit() {
		const { username, password } = this.state
		if (!username || !password || username === '' || password === '') {
			this.setState({ error: 'The username or password is missing.' })
			return
		}
		const { status, token } = await controller.login(username, password)
		switch (status) {
			case 200:
				break
			case 401:
				this.setState({ error: 'The username or password you entered is incorrect.' })
				return
			case 404:
				this.setState({ error: 'An account with that username doesn\'t exist.' })
				return
			default:
			case 500:
				this.setState({ error: 'Something went wrong. Try again?' })
				return
		}
		console.log(token)
		localStorage.setItem('token', token)
		this.setState({ error: null, token })
		Router.push('/feed')
	}

	render() {
		return (
			<Layout title="login">
				<style jsx>{`
                    .welcome-msg {
                        font-size: 18px;
                        letter-spacing: 5px;
                        font-weight: 900;
                        color: black;
                        text-transform: uppercase;
                    }
                    input.input::placeholder {
                        color: #5e5e5e;
                    }
                    input.input {
                        border: 2px solid #5e5e5e;
                        height: 51px;
                    }
                    img {
                        user-select: none;
                    }
                `}</style>
				<div className="hero is-fullheight">
					<div className="hero-body">
						<div className="container has-text-centered" style={{ maxWidth: '360px' }}>
							<h4 className="title is-4 welcome-msg">Welcome to</h4>
							<img src="../branding/kilobit-wordmark-color.svg" alt="kilobit wordmark" />
							<br />
							<br />
							{this.state.error ?
								<div className="notification is-danger"><strong>{this.state.error}</strong></div>
								: null
							}
							<input
								type="input"
								name="username"
								className="input"
								style={{ fontWeight: 'bold' }}
								placeholder="username"
								onChange={this.changeState.bind(this)}
								value={this.state.username}
								onKeyUp={this.detectEnter.bind(this)}
							/>
							<br />
							<br />
							<input
								type="password"
								name="password"
								className="input"
								style={{ fontWeight: 'bold' }}
								placeholder="password"
								onChange={this.changeState.bind(this)}
								value={this.state.password}
								onKeyUp={this.detectEnter.bind(this)}
							/>
							<br />
							<br />
							<button className="button is-rounded is-primary" onClick={this.submit.bind(this)}><strong>Login</strong></button>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}


export default Login