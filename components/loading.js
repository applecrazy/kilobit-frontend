import { Component } from 'react'
import NProgress from 'nprogress'

class Loading extends Component {
	componentDidMount() {
		NProgress.start()
	}
	componentWillUnmount() {
		NProgress.done()
	}
	render() {
		// we don't render anything here.
		return (
			<div className="hero is-primary is-fullheight">
				<div className="hero-body has-text-centered">
					<img src="/branding/kilobit-wordmark.svg" className="loading-branding" />
				</div>
				<style jsx>{`
				:global(html) {
					background: #297FFF;
					color: white;
				}
				.loading-branding {
					margin: 0 auto;
					width: 50%;
					max-width: 200px;
				}
			`}</style>
			</div>
		)
	}
}

export default Loading