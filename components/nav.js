import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { connect } from 'react-redux'

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
					<div className="navbar-item">
						<div className="buttons has-text-centered-mobile">
							{!this.props.loggedIn ? <Link href="/login"><a className="button is-white is-rounded has-text-primary"><strong>Login</strong></a></Link> : null}
							{!this.props.loggedIn ? <Link href="/signup"><a className="button is-white is-rounded is-outlined"><strong>Sign up</strong></a></Link> : null}
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

Nav.propTypes = {
	loggedIn: PropTypes.bool
}

const mapStateToProps = state => {
	return {
		loggedIn: state.isLoggedIn
	}
}

export default connect(mapStateToProps, {})(Nav)
