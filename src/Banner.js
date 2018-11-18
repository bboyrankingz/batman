import React, { Component } from 'react';
import YoutubeBackground from 'react-youtube-background'
import {
    Container,
    Row,
} from 'reactstrap';
import './Banner.css';

export class Banner extends Component {
    render() {
        var vids = ["5XX7lhChhYk", "1NEmdkfASYs", "KAn7hS5yjAs", "IQWzJCGMhgY", "7pUo88NiTfg"]
        var id = vids[Math.floor(Math.random() * Math.floor(5))];

        return (
            <YoutubeBackground videoId={id} overlay="rgba(0,0,0,.4)">
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
        );
    }
}
