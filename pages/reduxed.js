/* eslint-disable */
import { useState } from 'react'

import { connect } from 'react-redux'
// import { getUserInfo, getUserBits, getBitInfo, login } from '../actions'
import { profileGet } from '../actions'

import Layout from '../components/layout'

import classNames from 'classnames'

const Reduxed = props => {
	return (
		<Layout withIcons withNavbar title="State Playground">
			<section className="section">
				<h1 className="title">Redux Refactor Playground</h1>
			</section>
			<section className="section">
				<h4 className="title is-4 has-text-centered">Getting User Info</h4>
				<div className="columns">
					<div className="column is-3">
						<h5 className="subtitle">Action</h5>
						<button className={classNames('button', 'is-primary', { 'is-loading': props.profile.loading })} onClick={() => props.profileGet('zuck')}>profileGet()</button>
					</div>
					<div className="column">
						<h5 className="subtitle">Result</h5>
						<label className="label"><code>state.profile.current</code></label>
						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.profile.current)}></textarea>
					</div>
				</div>
			</section>
		</Layout>
	)
}

// const Reduxed = props => {
// 	const [username, setUsername] = useState('')
// 	const [password, setPassword] = useState('')
// 	return (
// 		<Layout withIcons withNavbar title="Redux Playground">
// 			<section className="section">
// 				<h1 className="title">Redux Refactor Playground</h1>
// 			</section>
// 			<section className="section">
// 				<h4 className="title is-4 has-text-centered">Getting User Info</h4>
// 				<div className="columns">
// 					<div className="column is-3">
// 						<h5 className="subtitle">Action</h5>
// 						<button className={classNames('button', 'is-primary', { 'is-loading': props.loadingUserInfo })} onClick={() => props.getUserInfo('zuck')}>getUserInfo()</button>
// 					</div>
// 					<div className="column">
// 						<h5 className="subtitle">Result</h5>
// 						<label className="label"><code>state.curUserInfo</code></label>
// 						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.userInfo)}></textarea>
// 					</div>
// 				</div>
// 			</section>
// 			<section className="section">
// 				<h4 className="title is-4 has-text-centered">Getting User Bits</h4>
// 				<div className="columns">
// 					<div className="column is-3">
// 						<h5 className="subtitle">Action</h5>
// 						<button className={classNames('button', 'is-primary', { 'is-loading': props.loadingBitInfo })} onClick={() => props.getUserBits('zuck')}>getUserBits()</button>
// 					</div>
// 					<div className="column">
// 						<h5 className="subtitle">Result</h5>
// 						<label className="label"><code>state.bits</code></label>
// 						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.bits)}></textarea>
// 						<hr />
// 						<label className="label"><code>state.bits.length</code></label>
// 						<input type="text" className="input" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={props.bits.length} />
// 						<hr />
// 						<label className="label"><code>state.curBitPage</code></label>
// 						<input type="text" className="input" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={props.curBitPage} />
// 						<hr />
// 						<label className="label"><code>state.totalBitPages</code></label>
// 						<input type="text" className="input" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={props.totalBitPages} />
// 					</div>
// 				</div>
// 			</section>
// 			<section className="section">
// 				<h4 className="title is-4 has-text-centered">Getting Bit Info</h4>
// 				<div className="columns">
// 					<div className="column is-3">
// 						<h5 className="subtitle">Action</h5>
// 						<button className={classNames('button', 'is-primary', { 'is-loading': props.loadingUserInfo })} onClick={() => props.getBitInfo('5e0be1619458d26947fe63d3')}>getBitInfo()</button>
// 					</div>
// 					<div className="column">
// 						<h5 className="subtitle">Result</h5>
// 						<label className="label"><code>state.curBitInfo</code></label>
// 						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.bitInfo)}></textarea>
// 					</div>
// 				</div>
// 			</section>
// 			<section className="section">
// 				<h4 className="title is-4 has-text-centered">Logging In</h4>
// 				<div className="columns">
// 					<div className="column is-3">
// 						<h5 className="subtitle">Action</h5>
// 						<label className="label"><code>username</code></label>
// 						<input type="text" className="input" style={{ borderRadius: '3px', fontFamily: 'monospace' }} value={username} onChange={e => setUsername(e.target.value)} />
// 						<br/> <br/>
// 						<label className="label"><code>password</code></label>
// 						<input type="password" className="input" style={{ borderRadius: '3px', fontFamily: 'monospace' }} value={password} onChange={e => setPassword(e.target.value)} />
// 						<hr/>
// 						<button className={classNames('button', 'is-primary', { 'is-loading': props.loadingAuth })} onClick={() => props.login(username, password)}>login()</button>
// 					</div>
// 					<div className="column">
// 						<h5 className="subtitle">Result</h5>
// 						<label className="label"><code>state.authToken</code></label>
// 						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={props.authToken || ''}></textarea>
// 					</div>
// 				</div>
// 			</section>
// 		</Layout>
// 	)
// }

const mapDispatchToProps = { profileGet }
const mapStateToProps = state => {
	return {
		profile: state.profile
	}
}
// 	return {
// 		userInfo: state.curUserInfo,
// 		loadingUserInfo: state.loadingUserInfo,
// 		loadingBits: state.loadingBits,
// 		bits: state.bits,
// 		bitType: state.bitType,
// 		curBitPage: state.curBitPage,
// 		totalBitPages: state.totalBitPages,
// 		loadingBitInfo: state.loadingBitInfo,
// 		bitInfo: state.curBitInfo,
// 		loadingAuth: state.loadingAuth,
// 		authToken: state.authToken
// 	}
// }

export default connect(mapStateToProps, mapDispatchToProps)(Reduxed)