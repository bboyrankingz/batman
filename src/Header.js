import React, { Component } from 'react';
import {
    Container,
} from 'reactstrap';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <header className="default-header">
                    <div className="sticky-header">
                        <Container>
                            <div className="header-content d-flex justify-content-between align-items-center">
                                <div className="right-bar d-flex align-items-center">
                                    <nav className="d-flex align-items-center">
                                        <ul className="main-menu">
                                            <li><a href="#about">Bruce Wayne</a></li>
                                            <li><a href="#studio">Break ma Baraque</a></li>
                                            <li><a href="#footage">Footage</a></li>
                                        </ul>
                                        <a href="#" className="mobile-btn"><span className="lnr lnr-menu"></span></a>
                                    </nav>
                                    <div className="header-social d-flex align-items-center">
                                        <a href="."><i className="fa fa-facebook"></i></a>
                                        <a href="."><i className="fa fa-twitter"></i></a>
                                        <a href="."><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </header>

            </div>
        );
    }
}

export default Header;