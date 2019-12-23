import React, { Component } from 'react'
import { withRouter } from 'next/router'
import ProfileHeader from '../../components/profile-header'
import BitCard from '../../components/bit-card'
import Layout from '../../components/layout'


class Profile extends Component {
    render() {
        return (
            <Layout withIcons withNavbar title={`@${this.props.router.query.profile}`}>
                <ProfileHeader
                    displayName="Mark Zuckerberg"
                    handle="zuck"
                    numBits={3}
                    verified
                />
                <section className="section" style={{ paddingTop: '2rem' }}>
                    <div className="columns">
                        <div className="column is-6 bit-list">
                            <BitCard
                                displayName="Mark Zuckerberg"
                                handle={this.props.router.query.profile}
                                text="You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday"
                                date="12h"
                                numHearts="10"
                                numReplies="1"
                                bitID="128289143893498349"
                                verified
                            />
                            <BitCard
                                displayName="Mark Zuckerberg"
                                handle={this.props.router.query.profile}
                                text="Am I actually a #robot? Had fun watching the finale of @MrRobotUSA, great show."
                                date="18h"
                                numHearts="100"
                                numReplies="38"
                                bitID="128289143893498349"
                                verified
                            />
                            <BitCard
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
            </Layout>
        )
    }
}

export default withRouter(Profile)
