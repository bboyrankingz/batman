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
                <section id="awards" className="section-full">
                    <Container>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="product-area-title text-center">
                                    <p className="text-uppercase">Palmares</p>
                                    <h2 className="h1">Mon palmares individuel et par equipe</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="single-pricing-table">
                                    <div className="top">
                                        <div className="package text-center">
                                            <div className="price">1er Place</div>
                                        </div>
                                    </div>
                                    <div className="bottom text-center">
                                        <ul className="feature text-center">
                                            {wins}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-pricing-table">
                                    <div className="top">
                                        <div className="package text-center">
                                            <div className="price">2eme Place</div>
                                        </div>
                                    </div>
                                    <div className="bottom text-center">
                                        <ul className="feature text-center">
                                            {losses}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-pricing-table">
                                    <div className="top">
                                        <div className="package text-center">
                                            <div className="price">Juge</div>
                                        </div>
                                    </div>
                                    <div className="bottom text-center">
                                        <ul className="feature text-center">
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