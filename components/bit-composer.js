import { useState } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

const BitComposer = props => {
	const [rows, setRows] = useState(1)
	const [txt, setTxt] = useState('')
	return (
		<div className={classNames('box', { 'not-expanding': !props.expanding })}>
			<textarea
				name="text"
				rows={rows}
				cols="10"
				wrap="soft"
				maxLength="128"
				placeholder="Share your thoughts with the world..."
				onBlur={() => txt.length === 0 ? setRows(1) : null}
				onChange={e => {
					setTxt(e.target.value)
					if (txt.length >= 50) setRows(3)
					if (txt.length < 50 && rows !== 1) setRows(1)
				}}
				value={txt}></textarea>
			{txt.length > 0 ? <div className="action-bar">
				<div className="char-count">{txt.length} / 128</div>
				<button className="button is-primary is-rounded"><strong>Post Bit</strong></button>
			</div> : null}
			{/* <div className="action-bar">
			<button className="button is-primary is-rounded">Post Bit</button>
		</div> */}
			<style jsx>{`
			textarea {
				overflow: hidden;
				resize: none;
				border: none;
				outline: none;
				width: 100%;
				font-size: 1.5rem;
				word-wrap: break-word;
				display: flex;
				justify-content: center;
			}
			.not-expanding {
				margin: 0 auto;
				max-width: 600px;
			}
			.action-bar {
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				background: white;
			}
			.char-count {
				width: 100%;
				display: flex;
				align-items: center;
			}
			@media screen and (max-width: 500px) {
				textarea {
					font-size: 1.1rem;
					min-height: 110%;
					overflow: visible;
				}
			}
		`}</style>
		</div>
	)
}

BitComposer.propTypes = {
	expanding: PropTypes.bool,
}

export default BitComposer