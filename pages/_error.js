import PropTypes from 'prop-types'

import Router from 'next/router'

import Nav from '../components/nav'
import Layout from '../components/layout'

const Error = ({ statusCode }) => {
	return (
		<Layout title="error">
			<div className="hero is-fullheight is-primary">
				<div className="hero-head">
					<Nav />
				</div>
				<div className="hero-body has-text-centered has-text-white">
					<div className="container">
						<h1 className="title is-1 has-text-centered" style={{ fontSize: '7rem', fontWeight: '200' }}>
							{statusCode ? statusCode : 'Error'}
						</h1>
						<h2 className="subtitle is-4">
							{statusCode === 404 ?
								<div>This page doesn&apos;t exist.<br />You should probably <a onClick={() => Router.back()} style={{ textDecoration: 'underline' }}>go back</a>.</div>
								: <div>We&apos;ve got problems.<br /><a onClick={() => Router.back()} style={{ textDecoration: 'underline' }}>Go back</a> or refresh this page in a bit.</div>
							}
						</h2>

					</div>
				</div>
			</div>
		</Layout>
	)
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

Error.propTypes = {
	statusCode: PropTypes.number,
}

export default Error