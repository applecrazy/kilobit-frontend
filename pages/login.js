import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'

import Layout from '../components/layout'

import { connect } from 'react-redux'
import { authTokenGet } from '../actions'
import Loading from '../components/loading'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
		}
	}

	static async getInitialProps({ isServer }) {
		return { isServer }
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

	submit() {
		const { username, password } = this.state
		if (!username || !password || username === '' || password === '') {
			return
		}
		this.props.authTokenGet(username, password)
	}

	humanifyError(err) {
		switch (err) {
			case 401:
				return 'Incorrect username or password.'
			case 404:
				return 'That user doesn\'t exist.'
			default:
				return 'Something else went wrong. Try again later?'
		}
	}

	render() {
		if (this.props.auth.isAuth) {
			Router.push('/feed')
			return (
				<Loading />
			)
		}
		return (
			<Layout title="login">
				<style jsx>{`
					:global(html) {
						background: #297FFF;
					}
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
						color: black;
					}

                    img {
                        user-select: none;
					}
					.login-box {
						max-width: 420px;
						padding: 60px 40px;
						background: white;
						border-radius: 20px;
						box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
					}
                `}</style>
				<div className="hero is-fullheight">
					<div className="hero-body">
						<div className="container has-text-centered login-box">
							<h4 className="title is-4 welcome-msg">Log in to</h4>
							<img src="../branding/kilobit-wordmark-color.svg" alt="kilobit wordmark" />
							<br />
							<br />
							{this.props.auth.error ?
								<div className="notification is-danger"><strong>{this.humanifyError(this.props.auth.error)}</strong></div>
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

Login.propTypes = {
	auth: PropTypes.object,
	authTokenGet: PropTypes.func,
	isServer: PropTypes.bool,
}

const mapDispatchToProps = { authTokenGet }
const mapStateToProps = state => {
	return {
		auth: state.auth,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)