import Router from 'next/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from '../components/layout'
import BitComposer from '../components/bit-composer'
import BitCard from '../components/bit-card'

const Feed = props => {
	if (!props.isAuth) {
		Router.push('/')
	}
	return (
		<Layout withNavbar>
			<section className="section">
				<BitComposer />
				<br/>
				<BitCard
					displayName="John Doe"
					handle="johndoe"
					text="You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday"
					date="4h"
					bitID="128289143893498349"
					notExpanding
				/>
			</section>
		</Layout>
	)
}

Feed.propTypes = {
	isAuth: PropTypes.bool,
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
	}
}

export default connect(mapStateToProps, {})(Feed)