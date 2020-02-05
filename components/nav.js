import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { connect } from 'react-redux'
import { authLogout } from '../actions'

const { SIGNUP_DISABLED } = process.env

class Nav extends Component {
	render() {
		return (
			<nav className="navbar is-primary">
				<div className="navbar-brand">
					<div className="navbar-item">
						<Link href="/">
							<img src="/branding/kilobit-wordmark.svg" width="90%" />
						</Link>
					</div>
				</div>
				{this.props.auth.isAuth ?
					<div className="navbar-start">
						<Link href="/feed">
							<a className="navbar-item">
								<strong className="has-text-white">home</strong>
							</a>
						</Link>
					</div>
					: null
				}
				<div className="navbar-end">
					{this.props.auth.isAuth ?
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link"><strong className="has-text-white">@{this.props.auth.user.username}</strong></a>
							<div className="navbar-dropdown">
								<a className="navbar-item has-text-black" onClick={() => this.props.authLogout()}><strong>Log out</strong></a>
							</div>
						</div>
						:
						<div className="navbar-item">
							<div className="buttons has-text-centered-mobile">
								<Link href="/login"><a className="button is-white is-rounded has-text-primary"><strong>Login</strong></a></Link>
								{!SIGNUP_DISABLED ?
									<Link href="/signup"><a className="button is-white is-rounded is-outlined"><strong>Sign up</strong></a></Link>
									: null
								}
							</div>
						</div>
					}
				</div>
				<style jsx>{`
					.navbar-item > strong, .navbar-item {
						color: inherit !important;
					}
					.navbar-item.has-text-black > strong {
						color: #4a4a4a !important;
					}
					@media screen and (max-width: 768px) {
						.navbar-item.has-text-black > strong {
							color: inherit !important;
						}
					}
				`}</style>
			</nav>
		)
	}
}

Nav.propTypes = {
	auth: PropTypes.object,
	authLogout: PropTypes.func,
}

const mapDispatchToProps = { authLogout }

const mapStateToProps = state => {
	return {
		auth: state.auth,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
