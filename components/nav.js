import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { connect } from 'react-redux'
import { authLogout } from '../actions'

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
				<div className="navbar-end">
					{this.props.auth.isAuth ? <div className="navbar-item"><strong className="has-text-white">@{this.props.auth.user.username}</strong></div> : null}
					<div className="navbar-item">
						<div className="buttons has-text-centered-mobile">
							{!this.props.auth.isAuth ? <Link href="/login"><a className="button is-white is-rounded has-text-primary"><strong>Login</strong></a></Link> : null}
							{!this.props.auth.isAuth ? <Link href="/signup"><a className="button is-white is-rounded is-outlined"><strong>Sign up</strong></a></Link> : null}
							{this.props.auth.isAuth ? <a className="button is-white is-rounded is-outlined" onClick={() => this.props.authLogout()}><strong>Log out</strong></a> : null}
						</div>
					</div>
				</div>
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
