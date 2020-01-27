/* eslint-disable */
import { useState } from 'react'

import { connect } from 'react-redux'
import { profileGet, userBitsGet, bitRepliesGet, authTokenGet } from '../actions'

import Layout from '../components/layout'

import classNames from 'classnames'

const Reduxed = props => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	return (
		<Layout withNavbar title="State Playground">
			<section className="section">
				<h1 className="title">Redux Refactor Playground</h1>
			</section>
			<section className="section">
				<h4 className="title is-4 has-text-centered">Getting User Info</h4>
				<div className="columns">
					<div className="column is-3">
						<h5 className="subtitle">Action</h5>
						<button className={classNames('button', 'is-primary', { 'is-loading': props.profile.loading })} onClick={() => props.profileGet('zuck')}>profileGet('zuck')</button>
					</div>
					<div className="column">
						<h5 className="subtitle">Result</h5>
						<label className="label"><code>state.profile.current</code></label>
						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.profile.current)}></textarea>
					</div>
				</div>
			</section>
			<section className="section">
				<h4 className="title is-4 has-text-centered">Getting User Bits</h4>
				<div className="columns">
					<div className="column is-3">
						<h5 className="subtitle">Action</h5>
						<button className={classNames('button', 'is-primary', { 'is-loading': props.bits.loading })} onClick={() => props.userBitsGet('zuck')}>userBitsGet('zuck')</button>
					</div>
					<div className="column">
						<h5 className="subtitle">Result</h5>
						<label className="label"><code>state.bits.current</code></label>
						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.bits.current)}></textarea>
					</div>
				</div>
			</section>
			<section className="section">
				<h4 className="title is-4 has-text-centered">Getting Bit Replies</h4>
				<div className="columns">
					<div className="column is-3">
						<h5 className="subtitle">Action</h5>
						<button className={classNames('button', 'is-primary', { 'is-loading': props.replies.loading })} onClick={() => props.bitRepliesGet('5e0be1b89458d26947fe63dd')}>bitRepliesGet(...)</button>
					</div>
					<div className="column">
						<h5 className="subtitle">Result</h5>
						<label className="label"><code>state.replies.parentBit</code></label>
						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.replies.parentBit)}></textarea>
						<hr />
						<label className="label"><code>state.replies.children</code></label>
						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.replies.children)}></textarea>
					</div>
				</div>
			</section>
			<section className="section">
				<h4 className="title is-4 has-text-centered">Logging In</h4>
				<div className="columns">
					<div className="column is-3">
						<h5 className="subtitle">Data</h5>
						<label className="label"><code>username</code></label>
						<input type="text" className="input" style={{ borderRadius: '3px', fontFamily: 'monospace' }} value={username} onChange={e => setUsername(e.target.value)} />
						<br /> <br />
						<label className="label"><code>password</code></label>
						<input type="password" className="input" style={{ borderRadius: '3px', fontFamily: 'monospace' }} value={password} onChange={e => setPassword(e.target.value)} />
						<hr />
						<h5 className="subtitle">Action</h5>
						<button className={classNames('button', 'is-primary', { 'is-loading': props.auth.loading })} onClick={() => props.authTokenGet(username, password)}>login(...)</button>
					</div>
					<div className="column">
						<h5 className="subtitle">Result</h5>
						<label className="label"><code>state.auth.user</code></label>
						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.auth.user)}></textarea>
						<hr />
						<label className="label"><code>state.auth.token</code></label>
						<textarea className="textarea" style={{ borderRadius: '3px', fontFamily: 'monospace' }} disabled value={JSON.stringify(props.auth.token)}></textarea>
					</div>
				</div>
			</section>
		</Layout>
	)
}

const mapDispatchToProps = { profileGet, userBitsGet, bitRepliesGet, authTokenGet }
const mapStateToProps = state => {
	return {
		profile: state.profile,
		bits: state.bits,
		replies: state.replies,
		auth: state.auth
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Reduxed)