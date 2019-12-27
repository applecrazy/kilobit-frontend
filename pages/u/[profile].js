import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import Error from 'next/error'
import NProgress from 'nprogress'
import BottomScrollListener from 'react-bottom-scroll-listener'

import BitCard from '../../components/bit-card'
import ProfileHeader from '../../components/profile-header'
import Layout from '../../components/layout'

import controller from '../../controller'

class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			bits: [],
			page: 0,
			totalPages: 1,
			totalBits: 0,
			error: false
		}
	}

	static async getInitialProps({ query }) {
		const username = query.profile
		const userData = await controller.getUserInfo(username)
		return userData
	}

	async componentDidMount() {
		await this.loadMore()
	}

	async loadMore() {
		const { username } = this.props
		this.setState({ loading: true })
		NProgress.start()
		if (this.state.page + 1 > this.state.totalPages) {
			this.setState({ loading: false })
			NProgress.done()
			return
		}
		const response = await controller.loadUserBits(username, this.state.page + 1)
		if (response.status !== 200) {
			this.setState({ error: true })
		} else {
			this.setState({
				bits: this.state.bits.concat(response.result.docs),
				totalPages: response.result.totalPages,
				page: response.result.page,
				totalBits: response.result.totalDocs
			})
		}
		this.setState({ loading: false })
		NProgress.done()
	}
	render() {
		if (!this.props.username) {
			return null
		}
		if (this.props.status === 404) {
			return <Error statusCode={404} />
		}
		return (
			<Layout withIcons withNavbar title={`@${this.props.username}`}>
				<BottomScrollListener onBottom={async () => this.loadMore()} />
				<ProfileHeader
					displayName={this.props.userInfo.displayName}
					handle={this.props.username}
					numBits={this.state.totalBits}
					verified={this.props.userInfo.verified}
				/>
				<section className="section" style={{ paddingTop: '2rem' }}>
					<div className="columns">
						<div className="column is-hidden-mobile"></div>
						<div className="column is-6-fullhd is-8-tablet bit-list">
							{this.state.bits.map(
								bit =>
									<BitCard
										displayName={this.props.userInfo.displayName}
										handle={this.props.username}
										verified={this.props.userInfo.verified}
										text={bit.text}
										key={bit._id}
										bitID={bit._id}
										numHearts={bit.likeCount}
										numReplies={bit.replyCount}
										date={bit.creationDate}
									/>
							)}
							{this.state.bits.length === 0 ? <h1 className="subtitle has-text-centered"><br />Loading bits...</h1> : null}
						</div>
						<div className="column is-hidden-mobile"></div>
					</div>
				</section>
				{
					this.state.page < this.state.totalPages ?
						<section className="section has-text-centered">
							<a onClick={this.loadMore.bind(this)}><strong>{this.state.loading ? 'Loading...' : 'Load more...'}</strong></a>
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
	status: PropTypes.number,
	userInfo: PropTypes.shape({
		botUser: PropTypes.bool,
		displayName: PropTypes.string,
		numFollowers: PropTypes.number,
		username: PropTypes.string,
		verified: PropTypes.bool,
	})
}

export default withRouter(Profile)
