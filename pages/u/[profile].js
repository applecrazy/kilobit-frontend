import React, { Component } from 'react'
import { withRouter } from 'next/router'
import ProfileHeader from '../../components/profile-header'
import BitCard from '../../components/bit-card'
import Layout from '../../components/layout'


class Profile extends Component {
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
            <Layout withIcons withNavbar title={`@${this.props.router.query.profile}`}>
                <ProfileHeader
                    displayName="Mark Zuckerberg"
                    handle={this.props.router.query.profile}
                    numBits={3}
                    verified
                />
                <section className="section" style={{ paddingTop: '2rem' }}>
                    <div className="columns">
                        <div className="column is-hidden-mobile"></div>
                        <div className="column is-6-fullhd is-8-tablet bit-list">
                            <BitCard
                                displayName="Mark Zuckerberg"
                                handle={this.props.router.query.profile}
                                text="You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday"
                                date="12h"
                                numHearts={10}
                                numReplies={1}
                                bitID="128289143893498349"
                                verified
                            />
                            <BitCard
                                displayName="Mark Zuckerberg"
                                handle={this.props.router.query.profile}
                                text="Am I actually a #robot? Had fun watching the finale of @MrRobotUSA, great show."
                                date="18h"
                                numHearts={100}
                                numReplies={38}
                                bitID="128289143893498349"
                                verified
                            />
                            <BitCard
                                displayName="Mark Zuckerberg"
                                handle={this.props.router.query.profile}
                                text="Hello #kilobit! This is an awesome new platform where I can be myself, a robot. #totallynotrobots"
                                date="December 22, 2019 at 8:14 AM"
                                numHearts={2200}
                                numReplies={1000}
                                bitID="128289143893498349"
                                verified
                            />
                        </div>
                        <div className="column is-hidden-mobile"></div>
                    </div>
                </section>
                <section className="section has-text-centered">
                    <a onClick={this.loadMore.bind(this)}><strong>{this.state.loading ? 'Loading...' : 'Load more...'}</strong></a>
                </section>
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

export default withRouter(Profile)
