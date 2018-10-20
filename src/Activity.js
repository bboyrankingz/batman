import React, { Component } from 'react';
import {
    Container,
    Row,
} from 'reactstrap';
import './Activity.css';

class Activity extends Component {
    render() {

        return (
            <div>
                <section id="activities" className="section-full gray-bg">
                    <Container>
                        <Row className="justify-content-center">
                            <div className="col-lg-10">
                                <div className="section-title text-center">
                                    <h3>Evénements et activités de l’association</h3>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-md-4">
                                <figure className="signle-service">
                                    <img src={require('./img/workshop.jpg')} className="img-fluid" alt=""></img>
                                    <figcaption className="text-center">
                                        <h5 className="text-uppercase">Cours de Breakdance et stages de perfectionnement</h5>
                                        <p>collectifs et particuliers / enfants et adultes</p>
                                        <a href="https://docs.google.com/forms/d/1SwCeOOkPIeglsYnNR_VhBsOPDGIHbr8TJGZ0vngCbB0/edit" className="primary-btn d-inline-flex align-items-center">Réserver<span className="lnr lnr-arrow-right"></span></a>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-md-4">
                                <figure className="signle-service">
                                    <img src={require('./img/culture.jpg')} className="img-fluid" alt=""></img>
                                    <figcaption className="text-center">
                                        <h5 className="text-uppercase">Culture Hip-Hop</h5>
                                        <p> Expériences sur mesure liées à la culture Hip-Hop : initiation au Breakdance, au Graffiti, au DJing et/ou à la musique live Looping</p>
                                        <a href="https://docs.google.com/forms/d/1Ph5C91cIYu3rgGkiwuV3tqE2wqVUK5LCIRrSsyTzBj0/edit" className="primary-btn d-inline-flex align-items-center">Réserver<span className="lnr lnr-arrow-right"></span></a>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-md-4">
                                <figure className="signle-service">
                                    <img src={require('./img/dj.jpg')} className="img-fluid" alt=""></img>
                                    <figcaption className="text-center">
                                        <h5 className="text-uppercase">Animations DJ</h5>
                                        <p>Soirées, Anniversaire, bars et clubs</p>
                                        <a href="#contact" className="primary-btn d-inline-flex align-items-center">Contact<span className="lnr lnr-arrow-right"></span></a>
                                    </figcaption>
                                </figure>
                            </div>
                        </Row>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Activity;