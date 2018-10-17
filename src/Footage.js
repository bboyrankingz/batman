import React, { Component } from 'react';
import {
    Container,
    Row,
} from 'reactstrap';
import './Footage.css';


class Footage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
        };
    }

    componentDidMount() {
        fetch('https://bboyrankingz.com/media/search/bruce%20wayne.json')
            .then(response => response.json())
            .then(data => this.setState({ results: data.results }));
    }

    render() {

        const { results } = this.state;

        return (
            <div>
                <section id="blog" className="section-full">
                    <Container>
                        <Row className="justify-content-center">
                            <div className="col-lg-8">
                                <div className="product-area-title text-center">
                                    <p className="text-uppercase">Latest From me</p>
                                    <h2 className="h1">Footage of my last battle, workshop, showcase...</h2>
                                </div>
                            </div>
                        </Row>

                        <Row>
                            {results.slice(0,4).map(footage =>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-publish">
                                        <img src={footage.thumbnail} className="img-fluid" alt="" />
                                        <div className="top">
                                            <div className="mb-15 d-flex">
                                                <a href="#">{footage.created}</a>
                                                <span className="line">|</span>
                                                <a href="#">By {footage.channel_title}</a>
                                            </div>
                                            <h6 className="text-uppercase"><a href={footage.url}>{footage.title}</a></h6>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Footage;