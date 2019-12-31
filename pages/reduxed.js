/* eslint-disable */
import { connect } from 'react-redux'
import { getUserInfo } from '../actions'
import Layout from '../components/layout'
import classNames from 'classnames'

const Reduxed = props => {
	return (
		<Layout withIcons withNavbar>
			<section className="section">
				<h1 className="title">Redux Refactor Playground</h1>
				<h4 className="title is-4">Getting User Info</h4>
				<div className="columns">
					<div className="column is-3">
						<h5 className="subtitle">Action</h5>
						<button className={classNames('button', 'is-primary', { 'is-loading': props.loading })} onClick={() => props.getUserInfo('zuck')}>getUserInfo()</button>
					</div>
					<div className="column">
						<h5 className="subtitle">Result</h5>
						<textarea className="textarea" style={{borderRadius: '3px'}} disabled value={JSON.stringify(props.userInfo)}></textarea>
					</div>
				</div>
			</section>
		</Layout>
	)
}

const mapDispatchToProps = { getUserInfo }
const mapStateToProps = state => {
	return {
		userInfo: state.curUserInfo,
		loading: state.loadingUserInfo
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Reduxed)