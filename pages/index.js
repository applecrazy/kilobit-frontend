import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import '../styles/styles.sass'

const Home = () => (
  <>
    <Nav />
    <section className="hero is-primary is-medium">
      <div className="hero-body">
        <h1 className="title is-1 has-text-centered" style={{ fontWeight: '900', fontSize: '60px', marginBottom: '0' }}>Stay connected</h1>
        <h3 className="title is-3 has-text-centered" style={{ fontWeight: '900', fontSize: '40px' }}>with the world around you</h3>
      </div>
    </section>
    <section className="section has-text-white" style={{ background: '#272727' }}>
    <h3 className="title is-2 has-text-white has-text-centered" style={{ fontWeight: '900' }}>Share with the world in<br />128 characters or less.</h3>
    </section>
  </>
)

export default Home
