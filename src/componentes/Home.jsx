import React, { Component } from 'react';
import logo from '../imgs/logo512.png';

class Home extends Component {
    render() {
        return (
            <section className="App-main">
                <img src={logo} className="App-logo" alt="logo" />
            </section>
        );
    }
}

export default Home;