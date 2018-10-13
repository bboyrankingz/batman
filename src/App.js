import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Footage from './Footage';
import Studio from './Studio';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Footage/>
                <Studio/>
            </div>
        );
    }
}

export default App;
