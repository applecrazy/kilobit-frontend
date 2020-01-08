import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'

import Layout from '../../components/layout'
import BitCard from '../../components/bit-card'

import controller from '../../controller'

class BitView extends Component {
	static async getInitialProps({ query }) {
		const { id: bitID } = query
		const bitDetails = await controller.getBitInfo(bitID)
		return bitDetails
	}
	render() {
		const { bitInfo } = this.props
		return (
			<Layout withNavbar withIcons>
				<div className="columns">
					<div className="column"></div>
					<div className="column is-6">
						<BitCard
							displayName={bitInfo.user.displayName}
							handle={bitInfo.user.username}
							text={bitInfo.text}
							date={bitInfo.creationDate}
							numHearts={bitInfo.likeCount}
							numReplies={bitInfo.replyCount}
							bitID={bitInfo._id}
							verified={bitInfo.user.verified}
							mentions={bitInfo.mentions}
							tags={bitInfo.tags}
							hideBottomStats
						/>
						<div className="columns is-mobile stats-big">
							<div className="column has-text-centered">
								<h3 className="subtitle">{bitInfo.replyCount} {bitInfo.replyCount === 1 ? 'reply' : 'replies'}</h3>
							</div>
							<div className="column has-text-centered">
								<h3 className="subtitle">{bitInfo.likeCount} {bitInfo.likeCount === 1 ? 'like' : 'likes'}</h3>
							</div>
						</div>
						{bitInfo.replies.map(reply => (
							<BitCard
								displayName={reply.user.displayName}
								handle={reply.user.username}
								text={reply.text}
								date={reply.creationDate}
								numHearts={reply.likeCount}
								numReplies={reply.replyCount}
								bitID={reply._id}
								key={reply._id}
								mentions={reply.mentions}
								tags={reply.tags}
								verified={reply.user.verified}
							/>
						))}
					</div>
					<div className="column"></div>
				</div>
				<style jsx>{`
				h3.subtitle {
					font-weight: 500;
				}
				.stats-big {
					border-top: 2px solid whitesmoke;
					border-bottom: 2px solid whitesmoke;
					padding-top: 1rem;
					padding-bottom: 1rem;
					margin-top: 1.5rem;
					margin-bottom: 1.5rem;
				}
				.stats-big > .column {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				`}</style>
			</Layout>
		)
	}
}

BitView.propTypes = {
	bitInfo: PropTypes.shape({
		isReply: PropTypes.bool,
		replyCount: PropTypes.number,
		replies: PropTypes.arrayOf(PropTypes.shape({
			isReply: PropTypes.bool,
			replyCount: PropTypes.number,
			replies: PropTypes.arrayOf(PropTypes.string),
			likeCount: PropTypes.number,
			likes: PropTypes.arrayOf(PropTypes.string),
			'_id': PropTypes.string,
			text: PropTypes.string,
			user: PropTypes.shape({
				displayName: PropTypes.string,
				username: PropTypes.string,
				verified: PropTypes.bool,
				numFollowers: PropTypes.number,
				botUser: PropTypes.bool,
			}),
			mentions: PropTypes.arrayOf(PropTypes.shape({
				_id: PropTypes.string,
				mentionText: PropTypes.string,
			})),
			tags: PropTypes.arrayOf(PropTypes.string),
			creationDate: PropTypes.string,
			replyTo: PropTypes.string,
			replyToUser: PropTypes.string,
		})),
		likeCount: PropTypes.number,
		likes: PropTypes.arrayOf(PropTypes.string),
		'_id': PropTypes.string,
		text: PropTypes.string,
		user: PropTypes.shape({
			displayName: PropTypes.string,
			username: PropTypes.string,
			verified: PropTypes.bool,
			numFollowers: PropTypes.number,
			botUser: PropTypes.bool,
		}),
		creationDate: PropTypes.string,
		replyTo: PropTypes.string,
		replyToUser: PropTypes.string,
		mentions: PropTypes.arrayOf(PropTypes.shape({
			_id: PropTypes.string,
			mentionText: PropTypes.string,
		})),
		tags: PropTypes.arrayOf(PropTypes.string),
	}),
}

export default withRouter(BitView)