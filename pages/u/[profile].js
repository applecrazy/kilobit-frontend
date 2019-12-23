import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Nav from '../../components/nav'
import ProfileHeader from '../../components/profile-header'
import '../../styles/styles.sass'

const Bit = props => (
    <Link href={`/bit/${props.bitID}`}>
        <div className="box">
            <Link href="#">
                <h4 className="title is-5 bit-header" style={{ marginBottom: '6px', cursor: 'pointer' }}>
                    {props.displayName}
                    {props.verified ? ' ' : ''}
                    {props.verified ? <i className="fas fa-check-circle verified-check-small" title="verified."></i> : ''}
                    &emsp;
                    <span className="handle">@{props.handle}</span>
                </h4>
            </Link>
            <p className="bit-text">{props.text}</p>
            <p className="bit-date">{props.date}</p>
            <div className="columns interacts is-mobile">
                <div className="column is-3">
                    <i className="far fa-comment-alt"></i>&nbsp;&nbsp;<span className="interacts-label">{props.numReplies || 0}</span>
                </div>
                <div className="column is-3">
                    <i className="far fa-heart"></i>&nbsp;&nbsp;<span className="interacts-label">{props.numHearts || 0}</span>
                </div>
            </div>
            <style jsx>{`
                .bit-header {
                    font-size: 18px;
                    user-select: none;
                }
                .handle {
                    font-weight: 400;
                    user-select: none;
                }
                .bit-text {
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 24px;
                    margin-bottom: 6px;
                }
                .bit-date {
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 17px;
                    color: #5D5D5D;
                    margin-bottom: 6px;
                }
                .interacts {
                    font-size: 13px;
                }
                .interacts-label {
                    font-size: 15px;
                }
                .verified-check-small {
                    font-size: 13px;
                    user-select: none;
                }
                .box:hover {
                    background: #fbfbfb;
                    cursor: pointer;
                }
        `}</style>
        </div>
    </Link>
)

Bit.propTypes = {
    displayName: PropTypes.string.isRequired,
    verified: PropTypes.bool,
    handle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    numReplies: PropTypes.number,
    numHearts: PropTypes.number,
    bitID: PropTypes.string.isRequired
}


class Profile extends Component {
    render() {
        return (
            <>
                <Head>
                    <title key="title">kilobit: @{this.props.router.query.profile}</title>
                    <link key="icons" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
                </Head>
                <Nav />
                <ProfileHeader
                    displayName="Mark Zuckerberg"
                    handle="zuck"
                    numBits={3}
                    verified
                />
                <section className="section" style={{ paddingTop: '2rem' }}>
                    <div className="columns">
                        <div className="column is-6 bit-list">
                            <Bit
                                displayName="Mark Zuckerberg"
                                handle={this.props.router.query.profile}
                                text="You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday"
                                date="12h"
                                numHearts="10"
                                numReplies="1"
                                bitID="128289143893498349"
                                verified
                            />
                            <Bit
                                displayName="Mark Zuckerberg"
                                handle={this.props.router.query.profile}
                                text="Am I actually a #robot? Had fun watching the finale of @MrRobotUSA, great show."
                                date="18h"
                                numHearts="100"
                                numReplies="38"
                                bitID="128289143893498349"
                                verified
                            />
                            <Bit
                                displayName="Mark Zuckerberg"
                                handle={this.props.router.query.profile}
                                text="Hello #kilobit! This is an awesome new platform where I can be myself, a robot. #totallynotrobots"
                                date="December 22, 2019 at 8:14 AM"
                                numHearts="2.2k"
                                numReplies="1.0k"
                                bitID="128289143893498349"
                                verified
                            />
                        </div>
                        <div className="column is-hidden-mobile"></div>
                        <div className="column is-3 is-hidden-mobile">
                            <table className="table" style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td>Joined December 22, 2019</td>
                                    </tr>
                                    <tr>
                                        <td>more bitstats to come...</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <style jsx>{`
                    .bit-list {
                        padding: 0;
                        margin-left: 20px;
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
            </>
        )
    }
}

export default withRouter(Profile)
