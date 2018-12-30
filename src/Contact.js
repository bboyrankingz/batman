import React, { Component } from 'react';
import './Contact.css';

export class Contact extends Component {

    render() {
        return (
            <section id="contact" className="section-full gray-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="product-area-title text-center">
                                <p className="text-uppercase">Contact me</p>
                                <h2 className="h1">contact@breakmabaraque.fr</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mt-30">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="address mt-20">
                                        <h6 className="text-uppercase mb-15">Adresse</h6>
                                        <p>89 rue Rebeval 75019, Paris</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="address mt-20">
                                        <h6 className="text-uppercase mb-15">Telephone</h6>
                                        <a href="tel:0000">+33 7 61 88 57 54</a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                        <div className="col-lg-6 mt-30">

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
