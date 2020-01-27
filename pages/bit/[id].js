import React, { Component } from 'react'
import Error from '../_error'
import PropTypes from 'prop-types'

import Layout from '../../components/layout'
import BitCard from '../../components/bit-card'

import { connect } from 'react-redux'
import { bitRepliesGet } from '../../actions'

class BitView extends Component {
	static async getInitialProps(props) {
		const { store, query, isServer } = props
		const { id: bitID } = query
		store.dispatch(bitRepliesGet(bitID))
		return { bitID, isServer }
	}

	async componentDidMount() {
		const { bitID, bitRepliesGet, isServer } = this.props
		if (!isServer) {
			bitRepliesGet(bitID)
		}
	}
	render() {
		const { replies: data } = this.props
		const { parentBit, error, children } = data
		if (error) return <Error statusCode={error} />
		return (
			<Layout withNavbar>
				<div className="columns">
					<div className="column"></div>
					<div className="column is-6">
						<BitCard
							displayName={parentBit.user.displayName}
							handle={parentBit.user.username}
							text={parentBit.text}
							date={parentBit.creationDate}
							numHearts={parentBit.likeCount}
							numReplies={parentBit.replyCount}
							bitID={parentBit._id}
							verified={parentBit.user.verified}
							mentions={parentBit.mentions}
							tags={parentBit.tags}
							hideBottomStats
						/>
						<div className="columns is-mobile stats-big">
							<div className="column has-text-centered">
								<h3 className="subtitle">{parentBit.replyCount} {parentBit.replyCount === 1 ? 'reply' : 'replies'}</h3>
							</div>
							<div className="column has-text-centered">
								<h3 className="subtitle">{parentBit.likeCount} {parentBit.likeCount === 1 ? 'like' : 'likes'}</h3>
							</div>
						</div>
						{children.map(reply => (
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
	bitID: PropTypes.string,
	bitRepliesGet: PropTypes.func,
	isServer: PropTypes.bool.isRequired,
	replies: PropTypes.shape({
		parentBit: PropTypes.object.isRequired,
		error: PropTypes.any,
		children: PropTypes.arrayOf(PropTypes.object),
	}),
}

const mapDispatchToProps = { bitRepliesGet }
const mapStateToProps = state => {
	return {
		replies: state.replies,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BitView)