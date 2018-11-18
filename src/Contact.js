import React, { Component } from 'react';
import {
    Container,
} from 'reactstrap';
import './Contact.css';


export class Contact extends Component {

    render() {
        return (
            <div>
                <section id="contact" className="section-full gray-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="product-area-title text-center">
                                    <p className="text-uppercase">Contact me</p>
                                    <h2 className="h1">bruce wayne aka mathieu...</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mt-30">
                                <p>blablbala.</p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="address mt-20">
                                            <h6 className="text-uppercase mb-15">Physical Address</h6>
                                            <p>Emperor Publishing,56/8, bir uttam qazi nuruzzaman road, Dhaka - 1205</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="address mt-20">
                                            <h6 className="text-uppercase mb-15">Telephone</h6>
                                            <a href="tel:0000">012 (88) 017 25 656 565</a>
                                            <a href="tel:0000">012 (88) 017 25 656 565</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-30">

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
