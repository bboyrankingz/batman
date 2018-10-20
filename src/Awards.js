import React, { Component } from 'react';
import {
    Container,
} from 'reactstrap';
import './Awards.css';

const api = {
    baseUrl: 'https://bboyrankingz.com',
};

class Awards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
        };
    }
    componentDidMount() {
        var url = api.baseUrl + '/bboys/api/bruce-wayne.json';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ results: data.tournamentroundplayers_set })
            }
            );
    }

    render() {

        var items = [];
        this.state.results.map((award) => {
            items.push(
                <li>{award.title}</li>
            );
        });

        return (
            <div>
                <section id="awards" class="section-full">
                    <Container>
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="product-area-title text-center">
                                    <p class="text-uppercase">Palmares</p>
                                    <h2 class="h1">Mon palmares individuel et par equipe</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="single-pricing-table">
                                    <div class="top">
                                        <div class="head text-center">
                                            <span class="lnr lnr-shirt"></span><br />
                                            <h5 class="text-white text-uppercase">1er Place</h5>
                                        </div>
                                        <div class="package text-center">
                                            <div class="price">1</div>
                                            <span class="text-white">1er Place</span>
                                        </div>
                                    </div>

                                    <div class="bottom text-center">
                                        <ul class="feature text-center">
                                            {items}
                                        </ul>
                                        <a href="#" class="primary-btn text-uppercase d-inline-flex align-items-center">More<span class="lnr lnr-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single-pricing-table">
                                    <div class="top">
                                        <div class="head text-center">
                                            <span class="lnr lnr-shirt"></span><br />
                                            <h5 class="text-white text-uppercase">Business</h5>
                                        </div>
                                        <div class="package text-center">
                                            <div class="price">2</div>
                                            <span class="text-white">2em Place</span>
                                        </div>
                                    </div>

                                    <div class="bottom text-center">
                                        <ul class="feature text-center">
                                            <li>2.5 GB Photos</li>
                                            <li>Secure Online Transfer</li>
                                            <li>Unlimited Styles</li>
                                            <li>Customer Service</li>
                                            <li>Manual Backup</li>
                                        </ul>
                                        <a href="#" class="primary-btn text-uppercase d-inline-flex align-items-center">More<span class="lnr lnr-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single-pricing-table">
                                    <div class="top">
                                        <div class="head text-center">
                                            <span class="lnr lnr-apartment"></span>
                                            <h5 class="text-white text-uppercase">Ultimate</h5>
                                        </div>
                                        <div class="package text-center">
                                            <div class="price">3</div>
                                            <span class="text-white">Juge</span>
                                        </div>
                                    </div>

                                    <div class="bottom text-center">
                                        <ul class="feature text-center">
                                            <li>2.5 GB Photos</li>
                                            <li>Secure Online Transfer</li>
                                            <li>Unlimited Styles</li>
                                            <li>Customer Service</li>
                                            <li>Manual Backup</li>
                                        </ul>
                                        <a href="#" class="primary-btn text-uppercase d-inline-flex align-items-center">More<span class="lnr lnr-arrow-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Awards;