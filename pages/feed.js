import Router from 'next/router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Layout from '../components/layout'

const Feed = props => {
	if (!props.isAuth) {
		Router.push('/')
	}
	return (
		<Layout withIcons withNavbar>
			<section className="section">
            
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