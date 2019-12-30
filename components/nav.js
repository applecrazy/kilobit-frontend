import React, { Component } from 'react'
import Link from 'next/link'

import controller from '../controller'

class Nav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuth: false
		}
	}

	componentDidMount() {
		const isAuth = controller.isAuthenticated()
		this.setState({ isAuth })
	}
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
							{!this.state.isAuth ? <Link href="/login"><a className="button is-white is-rounded has-text-primary"><strong>Login</strong></a></Link> : null}
							{!this.state.isAuth ? <Link href="/signup"><a className="button is-white is-rounded is-outlined"><strong>Sign up</strong></a></Link> : null}
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default Nav
