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
		return (
			<Layout withNavbar withIcons>
				<div className="columns">
					<div className="column"></div>
					<div className="column is-6">
						<BitCard
							displayName="Mark Zuckerberg"
							handle="zuck"
							text={this.props.bitInfo.text}
							date={this.props.bitInfo.creationDate}
							numHearts={this.props.bitInfo.likeCount}
							numReplies={this.props.bitInfo.replyCount}
							bitID={this.props.bitInfo._id}
							verified
							hideBottomStats
						/>
						<div className="columns is-mobile stats-big">
							<div className="column has-text-centered">
								<h3 className="subtitle">{this.props.bitInfo.replyCount} {this.props.bitInfo.replyCount === 1 ? 'reply' : 'replies'}</h3>
							</div>
							<div className="column has-text-centered">
								<h3 className="subtitle">{this.props.bitInfo.likeCount} {this.props.bitInfo.likeCount === 1 ? 'like' : 'likes'}</h3>
							</div>
						</div>
						<BitCard
							displayName="Aditya"
							handle="adi"
							text="@zuck cool."
							date={Date.now()}
							numHearts={10}
							numReplies={1}
							bitID="128289143893498349"
							verified
						/>
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
			user: PropTypes.string,
			creationDate: PropTypes.string,
			replyTo: PropTypes.string,
			replyToUser: PropTypes.string,
		})),
		likeCount: PropTypes.number,
		likes: PropTypes.arrayOf(PropTypes.string),
		'_id': PropTypes.string,
		text: PropTypes.string,
		user: PropTypes.string,
		creationDate: PropTypes.string,
		replyTo: PropTypes.string,
		replyToUser: PropTypes.string,
	})
}

export default withRouter(BitView)