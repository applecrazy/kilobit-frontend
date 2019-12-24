import PropTypes from 'prop-types'
import Link from 'next/link'
import '../styles/styles.sass'

const BitCard = props => (
    <Link href={`/bit/${props.bitID}`}>
        <div className="box" style={{
            width: props.fixedWidth ? `${props.fixedWidth}px` : 'auto',
            height: props.fixedHeight ? `${props.fixedHeight}px` : 'auto'
        }}>
            <Link href={`/u/${props.handle}`}>
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

BitCard.propTypes = {
    displayName: PropTypes.string.isRequired,
    verified: PropTypes.bool,
    handle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    numReplies: PropTypes.number,
    numHearts: PropTypes.number,
    bitID: PropTypes.string.isRequired,
    fixedWidth: PropTypes.number,
    fixedHeight: PropTypes.number
}

export default BitCard