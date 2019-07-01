import React, { Component } from "react";

export default class ClockPage extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
            <div>
                <h1>Hello React, Webpack 4 & Babel 7!</h1>
                <h3>The time is {this.state.date.toLocaleTimeString()}</h3>
            </div>

        )
    }
  };