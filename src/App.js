import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Footage from './Footage';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Footage/>
            </div>
        );
    }
}

export default App;
