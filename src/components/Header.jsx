import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <p>Budget App</p>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Account</li>
                    </ul>
                </nav>
            </header>
        )
    }
}
