import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'

import Error from './_error'
import Layout from '../components/layout'
import classNames from 'classnames'

import { connect } from 'react-redux'
import { userCreate } from '../actions'
import Loading from '../components/loading'

const { SIGNUP_DISABLED } = process.env

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			displayName: '',
			username: '',
			password: '',
		}
	}

	changeState(e) {
		var newState = {}
		newState[e.target.name] = e.target.value
		this.setState(newState)
	}

	submit() {
		const utcOffset = -new Date().getTimezoneOffset() / 60
		this.props.userCreate(this.state.displayName, this.state.username, this.state.password, utcOffset)
	}

	humanifyError(err) {
		switch (err) {
			case 409:
				return 'That username is taken.'
			default:
				return 'Something else went wrong. Try again later?'
		}
	}

	render() {
		if (SIGNUP_DISABLED) {
			return <Error statusCode={404} />
		}

		if (this.props.auth.signedUp || this.props.auth.isAuth) {
			Router.push('/login')
			return (
				<Loading />
			)
		}

		return (
			<Layout title="signup">
				<style jsx>{`
                    input.input::placeholder {
                        color: #5e5e5e;
                    }
                    input.input {
                        border: 2px solid #5e5e5e;
                        height: 51px;
                    }
                `}</style>
				<div className="hero is-fullheight">
					<div className="hero-body">
						<div className="container has-text-centered" style={{ maxWidth: '360px' }}>
							<img src="../branding/kilobit-wordmark-color.svg" alt="kilobit wordmark" />
							<br />
							<br />
							{this.props.auth.error ?
								<div className="notification is-danger"><strong>{this.humanifyError(this.props.auth.error)}</strong></div>
								: null
							}
							<input
								type="input"
								name="displayName"
								className="input"
								style={{ fontWeight: 'bold' }}
								placeholder="display name"
								onChange={this.changeState.bind(this)}
								value={this.state.displayName}
							/>
							<br />
							<br />
							<input
								type="input"
								name="username"
								className="input"
								style={{ fontWeight: 'bold' }}
								placeholder="username"
								onChange={this.changeState.bind(this)}
								value={this.state.username}
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
							/>
							<br />
							<br />
							<button className={classNames('button', 'is-rounded', 'is-primary', { 'is-loading': this.props.auth.loading })} onClick={this.submit.bind(this)}><strong>Sign up</strong></button>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}

Signup.propTypes = {
	auth: PropTypes.object,
	userCreate: PropTypes.func,
}

const mapDispatchToProps = { userCreate }
const mapStateToProps = state => {
	return {
		auth: state.auth,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)