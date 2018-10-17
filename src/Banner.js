import React, { Component } from 'react';
import YoutubeBackground from 'react-youtube-background'
import {
    Container,
    Row,
} from 'reactstrap';
import './Banner.css';

class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <YoutubeBackground videoId="mMNYvAjsZDg" overlay="rgba(0,0,0,.4)">

                    <section className="banner-area relative">
                        <div className="overlay overlay-bg"></div>
                        <Container>
                            <Row style={{ minHeight: '100vh' }} className="justify-content-center align-items-center">
                                <div className="col-lg-8">
                                    <div className="text-center">
                                        <p className="text-uppercase text-white">Coming soon...</p>
                                        <h1 className="text-uppercase text-white">Bruce Wayne</h1>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                    </section>
                </YoutubeBackground>

            </div>
        );
    }
}

export default Banner;