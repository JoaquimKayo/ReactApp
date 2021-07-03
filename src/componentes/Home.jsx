import React, { Component } from 'react';
import logo from '../imgs/logo512.png';

class Home extends Component {
    render() {
        return (
            <main className="App-main">
                <img src={logo} className="App-logo" alt="logo" />
            </main>
        );
    }
}

export default Home;