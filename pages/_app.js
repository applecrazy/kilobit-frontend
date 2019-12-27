import React from 'react'
import App from 'next/app'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

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
                <Component {...pageProps} />
            </>
        )
    }
}