import PropTypes from 'prop-types'

import '../styles/styles.sass'

const ProfileHeader = props => (
	<div className="hero is-small is-primary">
		<div className="hero-body">
			<div className="columns">
				<div className="column">
					<h3 className="title displayname">
						{props.displayName}
						{props.verified ? <i className="fas fa-check-circle verified-check" title="verified."></i> : ''}
						{props.botUser ? <i className="fas fa-robot verified-check" title="this account is controlled by a robot."></i> : ''}
						&emsp;
						<span className="handle">@{props.handle}</span>
					</h3>
				</div>
				<div className="column has-text-right bit-count">
					{`${props.numBits} ${props.numBits === 1 ? 'bit' : 'bits'}`}
				</div>
			</div>
		</div>
		<style jsx>{`
			.displayname {
				font-size: 24px;
				font-weight: 500;
				user-select: none;
				display: flex;
				align-items: center;
			}
			.handle {
				font-weight: 400;
				user-select: none;
			}
			.verified-check {
				margin-left: 0.3rem;
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
	botUser: PropTypes.bool,
	handle: PropTypes.string.isRequired,
	numBits: PropTypes.number.isRequired,
}


export default ProfileHeader