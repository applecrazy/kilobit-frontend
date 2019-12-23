import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import '../styles/styles.sass'

const Home = () => (
  <>
    <Nav />
    <section className="hero is-primary is-medium" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="bkd is-hidden-mobile">&nbsp;</div>
      <div className="hero-body" style={{ position: 'relative' }}>
        <h1 className="title is-1 has-text-centered" style={{ fontWeight: '900', fontSize: '60px', marginBottom: '0' }}>Stay connected</h1>
        <h3 className="title is-3 has-text-centered" style={{ fontWeight: '900', fontSize: '40px' }}>with the world around you</h3>
      </div>
    </section>
    <section className="section has-text-white" style={{ background: '#272727' }}>
      <br />
      <h3 className="title is-2 has-text-white has-text-centered" style={{ fontWeight: '900' }}>Share with the world in<br />128 characters or less.</h3>
      <br className="is-hidden-mobile" /><br className="is-hidden-mobile" />
      <div className="bit-examples"></div>
    </section>
    <style jsx>{`
        :global(body) {
          background: #297FFF;
        }
        .bkd {
          height: 100%;
          width: 3572px;
          overflow: hidden;
          position:absolute;
          top: 0;
          bottom: 0;
          left: 0;
          animation: bkdscroll 180s linear infinite;
          animation-direction: alternate;
          background: url('./homepage-bkd-2.svg') repeat-x
        }
        .bit-examples {
          background: url('./bit-examples.svg');
          background-size: cover;
          background-position: center;
          height: 96px;
        }
        @media screen and (max-width: 375px) {
          .bit-examples {
            height: 65px;
          }
        }
        @media screen and (min-width: 1570px) {
          .bit-examples {
            height: 96px;
            width: 1575px;
            margin: 0 auto;
          }
        }
        @keyframes bkdscroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
  </>
)

export default Home
