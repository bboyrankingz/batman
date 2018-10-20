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
            judges: [],
        };
    }

    componentDidMount() {
        var url = api.baseUrl + '/bboys/apis/bruce-wayne.json';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ results: data.tournamentroundplayers_set, judges: data.jam_memberships })
            });
    }

    getAwards(match) {
        var awards = [];
        this.state.results
            .filter((award) => award.round_level === 1 && award.match === match)
            .sort((a, b) => b.elo - a.elo)
            .map((award) => {
                awards.push(
                    <li>{award.title}</li>
                );
            });
        return awards;
    }

    render() {

        var wins = this.getAwards(1);
        var losses = this.getAwards(2);

        var judges = [];
        this.state.judges
            .filter((award) => award.match === "Judge")
            .map((award) => {
                judges.push(
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
                                        <div class="package text-center">
                                            <div class="price">1er Place</div>
                                        </div>
                                    </div>
                                    <div class="bottom text-center">
                                        <ul class="feature text-center">
                                            {wins}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single-pricing-table">
                                    <div class="top">
                                        <div class="package text-center">
                                            <div class="price">2eme Place</div>
                                        </div>
                                    </div>
                                    <div class="bottom text-center">
                                        <ul class="feature text-center">
                                            {losses}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="single-pricing-table">
                                    <div class="top">
                                        <div class="package text-center">
                                            <div class="price">Juge</div>
                                        </div>
                                    </div>
                                    <div class="bottom text-center">
                                        <ul class="feature text-center">
                                            {judges}
                                        </ul>
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