import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Error from '../_error'

import BottomScrollListener from 'react-bottom-scroll-listener'

import BitCard from '../../components/bit-card'
import ProfileHeader from '../../components/profile-header'
import Layout from '../../components/layout'

import { connect } from 'react-redux'
import { userBitsGet, profileGet } from '../../actions'

class Profile extends Component {
	static async getInitialProps(props) {
		const { store, query, isServer } = props
		const username = query.profile
		store.dispatch(userBitsGet(username))
		store.dispatch(profileGet(username))
		return { username, isServer }
	}

	async componentDidMount() {
		const { username, userBitsGet, profileGet, isServer } = this.props
		if (!isServer) {
			userBitsGet(username)
			profileGet(username)
		}
	}

	loadMore() {
		const { username, userBitsGet } = this.props
		userBitsGet(username)
	}

	render() {
		const { error: bitError, current: currentBits, loading: loadingBits, total: totalBits, page: bitPage } = this.props.bits
		const { error: profileError, current: curProfile } = this.props.profile
		if (profileError) return <Error statusCode={profileError} />
		return (
			<Layout withNavbar title={`@${curProfile.username}`}>
				<BottomScrollListener onBottom={() => this.loadMore()} />
				<ProfileHeader
					displayName={curProfile.displayName}
					handle={curProfile.username}
					numBits={totalBits}
					verified={curProfile.verified}
					botUser={curProfile.botUser}
				/>
				<section className="section" style={{ paddingTop: '2rem' }}>
					<div className="columns">
						<div className="column is-hidden-mobile"></div>
						<div className="column is-6-fullhd is-8-tablet bit-list">
							{currentBits.map(
								bit =>
									<BitCard
										displayName={curProfile.displayName}
										handle={this.props.username}
										verified={curProfile.verified}
										text={bit.text}
										key={bit._id}
										bitID={bit._id}
										numHearts={bit.likeCount}
										numReplies={bit.replyCount}
										date={bit.creationDate}
										mentions={bit.mentions}
										tags={bit.tags}
										botUser={curProfile.botUser}
									/>,
							)}
							{loadingBits ? <h1 className="subtitle has-text-centered"><br />Loading bits...</h1> : null}
							{bitError === 404 ? <h1 className="subtitle has-text-centered"><br />This user hasn&apos;t posted a Bit yet.</h1> : null}
							{bitError !== 200 && bitError !== 404 ? <h1 className="subtitle has-text-centered"><br />Something went wrong loading this user&apos;s Bits.</h1> : null}
						</div>
						<div className="column is-hidden-mobile"></div>
					</div>
				</section>
				{
					((bitPage.current < bitPage.total) && totalBits !== 0) ?
						<section className="section has-text-centered">
							<a onClick={this.loadMore.bind(this)}><strong>{loadingBits ? 'Loading...' : 'Load more...'}</strong></a>
						</section>
						: null
				}
				<style jsx>{`
					.bit-list {
						padding: 0;
					}
					td {
						text-align: center !important;
					}
					@media screen and (max-width: 768px) {
						.bit-list {
							margin-left: 0px;
						}
					}
					
				`}</style>
			</Layout>
		)
	}
}

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	isServer: PropTypes.bool.isRequired,
	userBitsGet: PropTypes.func.isRequired,
	profileGet: PropTypes.func.isRequired,
	bits: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		error: PropTypes.any,
		type: PropTypes.string,
		page: PropTypes.shape({
			current: PropTypes.number.isRequired,
			total: PropTypes.number.isRequired,
		}).isRequired,
		username: PropTypes.string,
		current: PropTypes.array.isRequired,
		total: PropTypes.number.isRequired,
	}).isRequired,
	profile: PropTypes.shape({
		current: PropTypes.shape({
			botUser: PropTypes.bool,
			displayName: PropTypes.string,
			numFollowers: PropTypes.number,
			username: PropTypes.string,
			verified: PropTypes.bool,
		}),
		loading: PropTypes.bool.isRequired,
		error: PropTypes.any,
	}),
}

const mapDispatchToProps = { userBitsGet, profileGet }
const mapStateToProps = state => {
	return {
		bits: state.bits,
		profile: state.profile,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
