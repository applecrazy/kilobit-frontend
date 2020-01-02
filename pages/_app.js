import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import Head from 'next/head'

import { Provider } from 'react-redux'
import store from '../store'

import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', url => {
	console.log(`Loading: ${url}`)
	NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class KilobitApp extends App {
	render() {
		const { Component, pageProps } = this.props
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