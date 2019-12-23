import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import Nav from '../../components/nav'
import '../../styles/styles.sass'

class Profile extends Component {
    render() {
        return (
            <>
                <Head>
                    <title key="title">kilobit: @{this.props.router.query.profile}</title>
                    <link key="icons" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
                </Head>
                <Nav />
                <div className="hero is-small is-primary">
                    <div className="hero-body">
                        <div className="columns">
                            <div className="column">
                                <h3 className="title displayName">
                                    Mark Zuckerberg
                                    &nbsp;
                                    <i className="fas fa-check-circle verified-check" title="verified."></i>
                                    &emsp;
                                    <span className="handle">@{this.props.router.query.profile}</span>
                                </h3>
                            </div>
                            <div className="column has-text-right bit-count">
                                <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '3.5px', userSelect: 'none', textTransform: 'uppercase', userSelect: 'none' }}>4,284 bits</span>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section" style={{ paddingTop: '2rem' }}>
                    <div className="columns">
                        <div className="column is-6 bit-list">
                            <div className="box">
                                <h4 className="title is-5" style={{ marginBottom: '6px' }}>
                                    Mark Zuckerberg&nbsp;<i className="fas fa-check-circle verified-check-small" title="verified."></i>
                                    &emsp;
                                        <span className="handle">@{this.props.router.query.profile}</span>
                                </h4>
                                <p className="bit-text">You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday</p>
                                <p className="bit-date">January 10, 2019 at 9:14 PM</p>
                                <div className="columns interacts is-mobile">
                                    <div className="column is-2">
                                        <i className="far fa-comment-alt"></i>&nbsp;&nbsp;<span className="interacts-label">1.6k</span>
                                    </div>
                                    <div className="column is-2">
                                        <i className="far fa-heart"></i>&nbsp;&nbsp;<span className="interacts-label">9.4k</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <h4 className="title is-5" style={{ marginBottom: '6px' }}>
                                    Mark Zuckerberg&nbsp;<i className="fas fa-check-circle verified-check-small" title="verified."></i>
                                    &emsp;
                                        <span className="handle">@{this.props.router.query.profile}</span>
                                </h4>
                                <p className="bit-text">You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday</p>
                                <p className="bit-date">January 10, 2019 at 9:14 PM</p>
                                <div className="columns interacts is-mobile">
                                    <div className="column is-2">
                                        <i className="far fa-comment-alt"></i>&nbsp;&nbsp;<span className="interacts-label">1.6k</span>
                                    </div>
                                    <div className="column is-2">
                                        <i className="far fa-heart"></i>&nbsp;&nbsp;<span className="interacts-label">9.4k</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <h4 className="title is-5" style={{ marginBottom: '6px' }}>
                                    Mark Zuckerberg&nbsp;<i className="fas fa-check-circle verified-check-small" title="verified."></i>
                                    &emsp;
                                        <span className="handle">@{this.props.router.query.profile}</span>
                                </h4>
                                <p className="bit-text">You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday</p>
                                <p className="bit-date">January 10, 2019 at 9:14 PM</p>
                                <div className="columns interacts is-mobile">
                                    <div className="column is-2">
                                        <i className="far fa-comment-alt"></i>&nbsp;&nbsp;<span className="interacts-label">1.6k</span>
                                    </div>
                                    <div className="column is-2">
                                        <i className="far fa-heart"></i>&nbsp;&nbsp;<span className="interacts-label">9.4k</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-hidden-mobile"></div>
                        <div className="column is-3 is-hidden-mobile">
                            <table className="table" style={{width: '100%'}}>
                                <tbody>
                                    <tr>
                                        <td>Joined December 22, 2019</td>
                                    </tr>
                                    <tr>
                                        <td>hi</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <style jsx>{`
                    .displayName {
                        font-size: 24px;
                        font-weight: 500;
                        user-select: none;
                    }
                    .handle {
                        font-weight: 400;
                        user-select: none;
                    }
                    .verified-check {
                        font-size: 17px;
                        user-select: none;
                    }
                    .verified-check-small {
                        font-size: 13px;
                        user-select: none;
                    }
                    .verified-check:hover {
                        color: #efefef;
                    }
                    .bit-list {
                        padding: 0;
                        margin-left: 20px;
                    }
                    .bit-list > .box > .title {
                        font-size: 18px;
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
                    td {
                        text-align: center !important;
                    }
                    @media screen and (max-width: 768px) {
                        .bit-count {
                            text-align: left !important;
                        }
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
