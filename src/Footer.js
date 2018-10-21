import React, { Component } from 'react';
import {
    Container,
    Row,
} from 'reactstrap';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="section-full">
                    <Container>

                        <Row>

                            <div class="col-lg-3 col-sm-6">
                                <div class="single-footer-widget">
                                    <h6 class="text-white text-uppercase mb-20">About me</h6>
                                    <p>blablabla</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single-footer-widget">
                                    <h6 class="text-white text-uppercase mb-20">Navigation</h6>
                                    <div class="d-flex">
                                        <ul class="footer-nav">
                                            <li><a href="#about">Bruce Wayne</a></li>
                                            <li><a href="#studio">Break ma baraque</a></li>
                                            <li><a href="#footage">Videos</a></li>
                                        </ul>
                                        <ul class="ml-30 footer-nav">
                                            <li><a href="#award">Palmares</a></li>
                                            <li><a href="#activities">Cours</a></li>
                                            <li><a href="#contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single-footer-widget">
                                    <h6 class="text-white text-uppercase mb-20">Assos</h6>
                                    <p>Nous contacter...</p>

                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="single-footer-widget">
                                    <h6 class="text-white text-uppercase mb-20">Photos</h6>
                                    <ul class="instafeed d-flex flex-wrap">
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

                        <div class="footer-bottom d-flex justify-content-between align-items-center">
                            <p class="footer-text m-0">Copyright &copy; 2018  |  Developped by <a href="https://bboyrankingz.com">Bboyrankingz</a>.</p>
                            <div class="footer-social d-flex align-items-center">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-dribbble"></i></a>
                                <a href="#"><i class="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </Container>

                </footer>

            </div>
        );
    }
}

export default Footer;