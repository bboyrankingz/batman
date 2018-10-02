import React from "react"
import ReactDOM from "react-dom"

var Jumbotron = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Hello, batman</h1>
                <p className="lead">Bboy Bruce Wayne website is coming</p>
                <hr className="my-4"/>
                <p>See u soon...</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">A Button</a>
                </p>
            </div>
        );
    }
});

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h4>About me</h4>
                <p className="lead">Total Feeling crew member</p>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Jumbotron/>
        <About/>
    </div>,
    document.querySelector("#container")
);