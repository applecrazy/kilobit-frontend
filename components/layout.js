import PropTypes from 'prop-types'
import Head from 'next/head'

import Nav from './nav'

import '../styles/styles.sass'

const Layout = props => (
	<>
		<Head>
			<title key="title">{props.title ? `kilobit: ${props.title}` : 'kilobit'}</title>
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			<link rel="icon" type="image/png" href="/favicon.png" />
		</Head>
		{props.withNavbar ? <Nav /> : null}
		{props.children}
	</>
)

Layout.propTypes = {
	withNavbar: PropTypes.bool,
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
}

export default Layout