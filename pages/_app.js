import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import Head from 'next/head'

import { Provider } from 'react-redux'
import makeStore from '../store'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', url => {
	console.log(`Loading: ${url}`)
	NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class KilobitApp extends App {
	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
		return { pageProps }
	}
	componentDidMount() {
		this.props.store.subscribe(() => {
			const token = this.props.store.getState().authToken
			if (token) {
				localStorage.setItem('token', this.props.store.getState().authToken)
			}
		})
	}
	render() {
		const { Component, pageProps, store } = this.props
		return (
			<>
				<Head>
					<link rel="stylesheet" href="/nprogress.css" />
				</Head>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</>
		)
	}
}

export default withRedux(makeStore)(withReduxSaga(KilobitApp))