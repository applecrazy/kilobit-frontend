import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav className="navbar is-primary">
    <div className="navbar-brand">
      <div className="navbar-item">
        <img src="/branding/kilobit-wordmark.svg" width="90%" />
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link href="/login"><a class="button is-white is-rounded has-text-primary"><strong>Login</strong></a></Link>
          <Link href="/signup"><a class="button is-white is-rounded is-outlined"><strong>Sign up</strong></a></Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav
