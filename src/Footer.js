import React, { Component } from 'react';
import {
    Container,
    Row,
} from 'reactstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="section-full">
                    <Container>
                        <Row>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6 className="text-white text-uppercase mb-20">About me</h6>
                                    <p>blablabla</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6 className="text-white text-uppercase mb-20">Navigation</h6>
                                    <div className="d-flex">
                                        <ul className="footer-nav">
                                            <li><a href="#about">Bruce Wayne</a></li>
                                            <li><a href="#studio">Break ma baraque</a></li>
                                            <li><a href="#footage">Videos</a></li>
                                        </ul>
                                        <ul className="ml-30 footer-nav">
                                            <li><a href="#award">Palmares</a></li>
                                            <li><a href="#activities">Cours</a></li>
                                            <li><a href="#contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6 className="text-white text-uppercase mb-20">Assos</h6>
                                    <p>Nous contacter...</p>

                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-footer-widget">
                                    <h6 className="text-white text-uppercase mb-20">Photos</h6>
                                    <ul className="instafeed d-flex flex-wrap">
                                        <li><img src="img/i1.jpg" alt="" /></li>
                                        <li><img src="img/i2.jpg" alt="" /></li>
                                        <li><img src="img/i3.jpg" alt="" /></li>
                                        <li><img src="img/i4.jpg" alt="" /></li>
                                        <li><img src="img/i5.jpg" alt="" /></li>
                                        <li><img src="img/i6.jpg" alt="" /></li>
                                        <li><img src="img/i7.jpg" alt="" /></li>
                                        <li><img src="img/i8.jpg" alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                        </Row>

                        <div className="footer-bottom d-flex justify-content-between align-items-center">
                            <p className="footer-text m-0">Copyright &copy; 2018  |  Developped by <a href="https://bboyrankingz.com">Bboyrankingz</a>.</p>
                            <div className="footer-social d-flex align-items-center">
                                <a href="https://twitter.com/bboyrankingz"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="https://www.facebook.com/stats.bboyrankingz"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="https://www.linkedin.com/in/gilles-barsotti-894242138/"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                    </Container>

                </footer>

            </div>
        );
    }
}

export default Footer;