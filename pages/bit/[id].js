import Layout from '../../components/layout'
import BitCard from '../../components/bit-card'

const BitView = props => (
    <Layout withNavbar withIcons>
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
        <div className="columns">
            <div className="column"></div>
            <div className="column is-6">
                <BitCard
                    displayName="Mark Zuckerberg"
                    handle="zuck"
                    text="You know, I always wondered why the speed of light was 3.0E8 meters per second. Why that number specifically? #wondering #friday"
                    date={Date.now()}
                    numHearts={10}
                    numReplies={1}
                    bitID="128289143893498349"
                    verified
                    hideBottomStats
                />
                <div className="columns is-mobile stats-big">
                    <div className="column has-text-centered">
                        <h3 className="subtitle">1 reply</h3>
                    </div>
                    <div className="column has-text-centered">
                        <h3 className="subtitle">10 likes</h3>
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
    </Layout>
)


export default BitView