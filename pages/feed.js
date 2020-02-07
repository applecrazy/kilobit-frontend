import React, { Component } from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import BitComposer from '../components/bit-composer'
import BitCard from '../components/bit-card'

import { connect } from 'react-redux'
import { feedGet } from '../actions'

class Feed extends Component {
	async componentDidMount() {
		this.props.feedGet()
	}

	render() {
		if (!this.props.isAuth) {
			Router.push('/')
		}
		return (
			<Layout withNavbar>
				<section className="section">
					<BitComposer />
					<br />
					{this.props.feed.loading ? <br /> : null}
					{this.props.feed.loading ? <p className="has-text-centered"><strong>compiling your feed...</strong></p> : null}
					{this.props.feed.current.map(bit => {
						console.log(bit)
						return <BitCard
							displayName={bit.user.displayName}
							handle={bit.user.username}
							text={bit.text}
							date={bit.creationDate}
							numHearts={bit.likeCount}
							numReplies={bit.replyCount}
							bitID={bit._id}
							verified={bit.user.verified}
							mentions={bit.mentions}
							tags={bit.tags}
							key={bit._id}
							notExpanding
						/>
					})}
				</section>
			</Layout>
		)
	}
}

Feed.propTypes = {
	isAuth: PropTypes.bool,
	feed: PropTypes.object,
	feedGet: PropTypes.func,
}

const mapDispatchToProps = { feedGet }

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		feed: state.feed,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)