import PropTypes from 'prop-types'
import '../styles/styles.sass'

const ProfileHeader = props => (
    <div className="hero is-small is-primary">
        <div className="hero-body">
            <div className="columns">
                <div className="column">
                    <h3 className="title displayname">
                        {props.displayName}
                        {props.verified ? ' ' : ''}
                        {props.verified ? <i className="fas fa-check-circle verified-check" title="verified."></i> : ''}
                        &emsp;
                        <span className="handle">@{props.handle}</span>
                    </h3>
                </div>
                <div className="column has-text-right bit-count">
                    {`${props.numBits} bits`}
                </div>
            </div>
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        <div className="tag is-primary is-light is-rounded is-white">
                            <strong className="has-text-primary">Joined December 2019</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .displayname {
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
            .verified-check:hover {
                color: #efefef;
            }
            .bit-count {
                font-size: 20px;
                font-weight: bold;
                letter-spacing: 3.5px;
                user-select: none;
                text-transform: uppercase;
            }
            @media screen and (max-width: 768px) {
                .bit-count {
                    text-align: left !important;
                }
            } 
        `}</style>
    </div>
)

ProfileHeader.propTypes = {
    displayName: PropTypes.string.isRequired,
    verified: PropTypes.bool,
    handle: PropTypes.string.isRequired,
    numBits: PropTypes.number.isRequired
}


export default ProfileHeader