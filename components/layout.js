import PropTypes from 'prop-types'
import Head from 'next/head'
import Nav from './nav'
import '../styles/styles.sass'

const Layout = props => (
	<>
		<Head>
			<title key="title">{props.title ? `kilobit: ${props.title}` : 'kilobit'}</title>
			{props.withIcons ? <link key="icons" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" /> : null}
		</Head>
		{props.withNavbar ? <Nav /> : null}
		{props.children}
	</>
)

Layout.propTypes = {
	withNavbar: PropTypes.bool,
	withIcons: PropTypes.bool,
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired
}

export default Layout