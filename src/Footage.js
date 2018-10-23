import React, { Component } from 'react';
import {
    Container,
    Row,
} from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroller';
import './Footage.css';
import axios from 'axios';

const api = {
    baseUrl: 'https://bboyrankingz.com',
};


class Footage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            hasMoreItems: true,
            next: null,
            error: null
        };
    }
    loadItems() {
        var url = api.baseUrl + '/media/search/bruce%20wayne.json';
        if (this.state.next) {
            url = this.state.next;
        }
        axios.get(url)
            .then(result => {
                if (result.data.next) {
                    this.setState({
                        results: result.data.results,
                        next: result.data.next,
                    })
                } else {
                    this.setState({
                        hasMoreItems: false
                    })
                }
            })
            .catch(error => this.setState({ error: error, hasMoreItems: false }));
    }

    render() {
        const { results, hasMoreItems, error } = this.state;
        const loader = <div className="loader" key="1">Loading ...</div>;

        if (error) {
            return <p>{error.message}</p>;
        }

        var items = [];
        results.map((footage) => {
            items.push(
                <div className="col-lg-3 col-md-6" key={footage.id}>
                    <div className="single-publish">
                        <img src={footage.thumbnail} className="img-fluid" alt="" />
                        <div className="top">
                            <div className="mb-15 d-flex">
                                <a href={footage.url}>{footage.channel_title}</a>
                            </div>
                            <h6 className="text-uppercase"><a href={footage.url}>{footage.title}</a></h6>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <section id="footage" className="section-full">
                    <Container>
                        <Row className="justify-content-center">
                            <div className="col-lg-8">
                                <div className="product-area-title text-center">
                                    <p className="text-uppercase">Latest From me</p>
                                    <h2 className="h1">Footage of my last battle, workshop, showcase...</h2>
                                </div>
                            </div>
                        </Row>

                        <InfiniteScroll
                            pageStart={0}
                            loadMore={this.loadItems.bind(this)}
                            hasMore={hasMoreItems}
                            loader={loader}
                        >
                            <Row>
                                {items}
                            </Row>
                        </InfiniteScroll>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Footage;