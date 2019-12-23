import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Nav from '../../components/nav'
import Link from 'next/link'
import Head from 'next/head'
import { withRouter } from 'next/router'
import '../../styles/styles.sass'

const BitCard = props => (
    <div className="bit-card">
        <p className="bit-display-name">
            <Link href={"/u/" + props.handle}><a>{props.displayName}</a></Link>&nbsp;&nbsp;
            <span className="bit-handle">
                <Link href={"/u/" + props.handle}>
                    <a>@{props.handle}</a>
                </Link>
            </span>
        </p>
        <div style={{ height: '6px', lineHeight: '0px' }} />
        <p className="bit-content">You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday</p>
        <div style={{ height: '6px', lineHeight: '0px' }} />
        <p className="bit-date">January 10, 2019 at 9:14 PM</p>
        <div style={{ height: '6px', lineHeight: '0px' }} />
        <div className="columns interacts is-mobile">
            <div className="column">
                <i className="far fa-comment-alt"></i>&nbsp;&nbsp;<span className="interacts-label">1</span>
            </div>
            <div className="column">
                <i className="far fa-heart"></i>&nbsp;&nbsp;<span className="interacts-label">1</span>
            </div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
            <div className="column"></div>
        </div>
        <style jsx>{`
            .bit-card {
                width: 400px;
                height: 200px;
                border-radius: 13px;
                padding: 12px 14px;
                margin: 0 auto;
                margin-bottom: 30px;
                box-shadow: 0 0.5em 1em -0.125em rgba(0,0,0, 0.1), 0 0px 0 1px rgba(0,0,0, 0.02);
                border: .5px solid #efefef;
            }
            .bit-display-name {
                font-size: 18px;
                font-weight: bold;
                color: black;
            }
            .bit-display-name > a {
                color: black;
            }
            .bit-handle {
                font-weight: 400;
                color: black;
            }
            .bit-handle > a {
                color: black;
            }
            .bit-content {
                font-weight: 500;
                font-size: 18px;
                line-height: 24px;
                color: black;
            }
            .bit-date {
                font-weight: 500;
                font-size: 13px;
                line-height: 17px;
                color: #5D5D5D;
            }
            .interacts {
                font-size: 13px;
            }
            .interacts-label {
                font-size: 15px;
            }
        `}</style>
    </div>
)

BitCard.propTypes = {
    displayName: PropTypes.string,
    handle: PropTypes.string
}

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
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
                </Head>
                <Nav />
                <div className="hero is-primary is-small">
                    <div className="hero-body">
                        <div className="columns">
                            <div className="column">
                                <h1 className="title is-1 bit-tag" style={{ fontWeight: '400', fontSize: '70px', userSelect: 'none' }}>#{this.props.router.query.tag}</h1>
                            </div>
                            <div className="column is-3 has-text-right bit-display" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '4px', userSelect: 'none', textTransform: 'uppercase' }}>13,884 bits</span>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section bit-grid">
                    <BitCard displayName="John Doe" handle="johndoe" />
                    <BitCard displayName="Mary Test" handle="mary23" />
                    <BitCard displayName="Mark Zuck" handle="zuck" />
                    <BitCard displayName="Sundar Pitch" handle="sundar" />
                    <BitCard displayName="Aditya" handle="adi" />
                    <BitCard displayName="Jack" handle="jack" />
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
                        justify-content: space-between;
                    }
                    @media screen and (max-width: 768px) {
                        .bit-display {
                            justify-content: flex-start !important;
                        }
                        .bit-tag {
                            font-size: 40px !important;
                        }
                    }
                `}</style>
            </>
        )
    }
}

export default withRouter(Tag)