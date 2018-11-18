import React, { Component } from 'react';

export class Video extends Component {

    render() {
        return <div className="col-lg-3 col-md-6" key={this.props.footage.id}>
                    <div className="single-publish">
                        <img src={this.props.footage.thumbnail} className="img-fluid" alt="" />
                        <div className="top">
                            <div className="mb-15 d-flex">
                                <a href={this.props.footage.url}>{this.props.footage.channel_title}</a>
                            </div>
                            <h6 className="text-uppercase"><a href={this.props.footage.url}>{this.props.footage.title}</a></h6>
                        </div>
                    </div>
                </div>;
    }
}