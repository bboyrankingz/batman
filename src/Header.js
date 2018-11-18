import React, { Component } from 'react';
import {
    Container,
} from 'reactstrap';
import './Header.css';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export class Header extends Component {

    render() {
        return (
            <div>
                <StickyHeader
                    header={
                        <header className="default-header">
                            <div className="sticky-header">
                                <Container>
                                    <div className="header-content d-flex justify-content-between align-items-center">
                                        <div className="right-bar d-flex align-items-center">
                                            <nav className="d-flex align-items-center">
                                                <ul className="main-menu">
                                                    <li><a href="#studio">Break ma Baraque</a></li>
                                                    <li><a href="#about">Bruce Wayne</a></li>
                                                    <li><a href="#activities">Cours</a></li>
                                                    <li><a href="#footage">Videos</a></li>
                                                    <li><a href="#contact">Contact</a></li>
                                                </ul>
                                                <a href="#" className="mobile-btn"><span className="lnr lnr-menu"></span></a>
                                            </nav>
                                            <div className="header-social d-flex align-items-center">
                                                <a href="https://www.instagram.com/bboybrucewayne/"><FontAwesomeIcon icon={faInstagram} /></a>
                                                <a href="https://www.facebook.com/bruceboogiewayne"><FontAwesomeIcon icon={faFacebook} /></a>
                                                <a href="."><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </header>
                    }
                >
                </StickyHeader>
            </div>
        );
    }
}
