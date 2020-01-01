/* eslint-disable */
import { connect } from 'react-redux'
import { getUserInfo, getUserBits, getBitInfo } from '../actions'
import Layout from '../components/layout'
import classNames from 'classnames'

const Reduxed = props => {
	return (
		<Layout withIcons withNavbar title="Redux Playground">
			<section className="section">
				<h1 className="title">Redux Refactor Playground</h1>
			</section>
			<section className="section">
				<h4 className="title is-4 has-text-centered">Getting User Info</h4>
				<div className="columns">
					<div className="column is-3">
						<h5 className="subtitle">Action</h5>
						<button className={classNames('button', 'is-primary', { 'is-loading': props.loadingUserInfo })} onClick={() => props.getUserInfo('zuck')}>getUserInfo()</button>
					</div>
					<div className="column">
						<h5 className="subtitle">Result</h5>
						<label className="label"><code>state.curUserInfo</code></label>
						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.userInfo)}></textarea>
					</div>
				</div>
			</section>
			<section className="section">
				<h4 className="title is-4 has-text-centered">Getting User Bits</h4>
				<div className="columns">
					<div className="column is-3">
						<h5 className="subtitle">Action</h5>
						<button className={classNames('button', 'is-primary', { 'is-loading': props.loadingBitInfo })} onClick={() => props.getUserBits('zuck')}>getUserBits()</button>
					</div>
					<div className="column">
						<h5 className="subtitle">Result</h5>
						<label className="label"><code>state.bits</code></label>
						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.bits)}></textarea>
						<hr />
						<label className="label"><code>state.bits.length</code></label>
						<input type="text" className="input" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={props.bits.length} />
						<hr />
						<label className="label"><code>state.curBitPage</code></label>
						<input type="text" className="input" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={props.curBitPage} />
						<hr />
						<label className="label"><code>state.totalBitPages</code></label>
						<input type="text" className="input" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={props.totalBitPages} />
					</div>
				</div>
			</section>
			<section className="section">
				<h4 className="title is-4 has-text-centered">Getting Bit Info</h4>
				<div className="columns">
					<div className="column is-3">
						<h5 className="subtitle">Action</h5>
						<button className={classNames('button', 'is-primary', { 'is-loading': props.loadingUserInfo })} onClick={() => props.getBitInfo('5e0be1619458d26947fe63d3')}>getBitInfo()</button>
					</div>
					<div className="column">
						<h5 className="subtitle">Result</h5>
						<label className="label"><code>state.curBitInfo</code></label>
						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.bitInfo)}></textarea>
					</div>
				</div>
			</section>
		</Layout>
	)
}

const mapDispatchToProps = { getUserInfo, getUserBits, getBitInfo }
const mapStateToProps = state => {
	return {
		userInfo: state.curUserInfo,
		loadingUserInfo: state.loadingUserInfo,
		loadingBits: state.loadingBits,
		bits: state.bits,
		bitType: state.bitType,
		curBitPage: state.curBitPage,
		totalBitPages: state.totalBitPages,
		loadingBitInfo: state.loadingBitInfo,
		bitInfo: state.curBitInfo
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Reduxed)