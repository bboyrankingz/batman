import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import './Studio.css';

class Studio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <section className="section-full studio-area">
                    <Container>
                        <Row>
                            <Col className="lg-6">
                                <p className="text-uppercase text-white">break ma barak</p>
                                <h2 className="h1 text-white text-uppercase mb-20">What is it ?</h2>
                                <p className="text-white mb-30">blabla explain what is it here...</p>
                                <a href="#" className="primary-btn text-white d-inline-flex align-items-center">Show more<span className="lnr lnr-arrow-right"></span></a>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Studio;