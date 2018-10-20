import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Awards from './Awards';
import Banner from './Banner';
import Footage from './Footage';
import Studio from './Studio';
import Activity from './Activity';
import Contact from './Contact';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <About/>
                <Awards/>
                <Studio/>
                <Activity/>
                <Footage/>
                <Contact/>
            </div>
        );
    }
}

export default App;
