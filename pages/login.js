import React, { Component } from 'react'
import Head from 'next/head'
import '../styles/styles.sass'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    changeState(e) {
        var newState = {}
        newState[e.target.name] = e.target.value
        this.setState(newState)
    }

    submit() {
        alert(JSON.stringify(this.state))
    }

    render() {
        return (
            <div className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered" style={{ maxWidth: '360px' }}>
                        <img src="../branding/kilobit-wordmark-color.svg" alt="kilobit wordmark" />
                        <br />
                        <br />
                        <input
                            type="input"
                            name="username"
                            className="input"
                            style={{ fontWeight: 'bold' }}
                            placeholder="username"
                            onChange={this.changeState.bind(this)}
                            value={this.state.username}
                        />
                        <br />
                        <br />
                        <input
                            type="password"
                            name="password"
                            className="input"
                            style={{ fontWeight: 'bold' }}
                            placeholder="password"
                            onChange={this.changeState.bind(this)}
                            value={this.state.password}
                        />
                        <br />
                        <br />
                        <button className="button is-rounded is-primary" onClick={this.submit.bind(this)}><strong>Login</strong></button>
                    </div>
                </div>
                <style jsx>{`
                    input.input::placeholder {
                        color: #5e5e5e;
                    }
                    input.input {
                        border: 2px solid #5e5e5e;
                        height: 51px;
                    }
                    img {
                        user-select: none;
                    }
                `}</style>
                <Head>
                    <title key="title">kilobit: login</title>
                </Head>
            </div>
        )
    }
}


export default Login