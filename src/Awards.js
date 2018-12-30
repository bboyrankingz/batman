import React, { Component } from 'react';
import {
    Container,
} from 'reactstrap';
import './Awards.css';

const api = {
    baseUrl: 'https://bboyrankingz.com',
};

export class Awards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            members: [],
        };
    }

    componentDidMount() {
        var url = api.baseUrl + '/bboys/apis/bruce-wayne.json';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ results: data.tournamentroundplayers_set, members: data.jam_memberships })
            });
    }

    getAwards() {
        var li;
        var year;
        return this.state.results
            .filter((award) => award.round_level === 1 && award.match === 1)
            .sort((a, b) => b.event_at.slice(0, 4) - a.event_at.slice(0, 4))
            .map((award) => {
                li = "";
                if (year !== award.event_at.slice(0, 4)) {
                    year = award.event_at.slice(0, 4);
                    li = <li><u>{year}</u></li>;
                }
                return <div>{li}<li>{award.title}</li></div>;
            });
    }

    getMember(type) {
        var year;
        var li;

        return this.state.members
            .filter((award) => award.match === type)
            .sort((a, b) => b.event_at.slice(0, 4) - a.event_at.slice(0, 4))
            .map((award) => {
                li = "";
                if (year !== award.event_at.slice(0, 4)) {
                    year = award.event_at.slice(0, 4);
                    li = <li><u>{year}</u></li>;
                }
                return <div>{li}<li>{award.title}</li></div>;
            });
    }

    render() {
        var wins = this.getAwards();
        var workshop = this.getMember("Teacher");
        var judges = this.getMember("Judge");

        return (
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
                                        <div className="price">Workshops</div>
                                    </div>
                                </div>
                                <div className="bottom text-center">
                                    <ul className="feature text-center">
                                        {workshop}
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
        );
    }
}
