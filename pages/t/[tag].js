import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nav from '../../components/nav'
import BitCard from '../../components/bit-card'
import Head from 'next/head'
import { withRouter } from 'next/router'

class Tag extends Component {
	constructor(props) { 
		super(props)
		this.state = {
			loading: false
		}
	}
	loadMore() { 
		this.setState({ loading: true })
		setTimeout(() => this.setState({loading: false}), 1000)
	}
	render() {
		return (
			<>
				<Head>
					<title key="title">kilobit: #{this.props.router.query.tag}</title>
					<link key="icons" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
				</Head>
				<Nav />
				<div className="hero is-primary is-small">
					<div className="hero-body">
						<div className="columns">
							<div className="column">
								<h1 className="title is-1 bit-tag" style={{ fontWeight: '400', fontSize: '70px', userSelect: 'none' }}>#{this.props.router.query.tag}</h1>
							</div>
							<div className="column is-3 has-text-right bit-display" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
								<span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '3.5px', userSelect: 'none', textTransform: 'uppercase' }}>13,884 bits</span>
							</div>
						</div>
					</div>
				</div>
				<section className="section bit-grid">
					<BitCard
						displayName="John Doe"
						handle="johndoe"
						text="You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday"
						date="4h"
						bitID="128289143893498349"
						fixedWidth={400}
						fixedHeight={205}
					/>
					<BitCard
						displayName="Mary Test"
						handle="marytest"
						text="You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday"
						date="8h"
						bitID="128289143893498349"
						fixedWidth={400}
						fixedHeight={205}
					/>
					<BitCard
						displayName="Mark Zuckerberg"
						handle="zuck"
						text="You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday"
						date="14h"
						bitID="128289143893498349"
						fixedWidth={400}
						fixedHeight={205}
						verified
					/>
					<BitCard
						displayName="Sundar Pitch"
						handle="sundar"
						text="You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday"
						date="1d"
						bitID="128289143893498349"
						fixedWidth={400}
						fixedHeight={205}
					/>
					<BitCard
						displayName="Aditya"
						handle="adi"
						text="You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday"
						date="5d"
						bitID="128289143893498349"
						fixedWidth={400}
						fixedHeight={205}
						numHearts={4900}
						numReplies={6200}
						verified
					/>
					<BitCard
						displayName="Jack"
						handle="jack"
						text="You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday"
						date="7d"
						bitID="128289143893498349"
						fixedWidth={400}
						fixedHeight={205}
						verified
					/>
				</section>
				<section className="section has-text-centered">
					<a onClick={this.loadMore.bind(this)}><strong>{this.state.loading ? 'Loading...' : 'Load more...'}</strong></a>
				</section>
				<style jsx>{`
					.bit-grid {
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
						width: 100%;
						justify-content: space-around;
					}
					@media screen and (max-width: 768px) {
						.bit-display {
							justify-content: flex-start !important;
						}
						.bit-tag {
							font-size: 40px !important;
						}
					}
					@media screen and (max-width: 375px) {
						.bit-grid {
							justify-content: center;
						}
					}
				`}</style>
			</>
		)
	}
}

Tag.propTypes = {
	router: {
		query: {
			tag: PropTypes.string
		}
	}
}

export default withRouter(Tag)