import React, { Component } from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Web from './Web';
import Mobile from './Mobile';
import Contact from './Contact';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="container" id="mainContainer">
                    <Home />
                    <About />
                    <Web />
                    <Mobile />
                    <Contact />
                </div>
            </>
        )
    }
}