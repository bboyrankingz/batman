import React, { Component } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <header className="default-header">
                    <Container>
                        <div className="header-content d-flex justify-content-between align-items-center">
                            <div className="right-bar d-flex align-items-center">
                                <Navbar color="inverse" light expand="md">
                                    <NavbarBrand href="/">Batman</NavbarBrand>
                                    <NavbarToggler onClick={this.toggle} />
                                    <Collapse isOpen={this.state.isOpen} navbar>
                                        <Nav className="ml-auto" navbar>
                                            <NavItem>
                                                <NavLink href="/components/">About me</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="">Facebook</NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                                <div className="header-social d-flex align-items-center">
                                    <a href="."><i className="fa fa-facebook"></i></a>
                                    <a href="."><i className="fa fa-twitter"></i></a>
                                    <a href="."><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </header>
                
            </div>
        );
    }
}

export default Header;