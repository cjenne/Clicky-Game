//Navbar Component
import React, { Component } from "react";


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <ul>
                    <li className="navbar-brand">Clicky Game!</li>
                    <li className="navbar-brand">{this.props.message}</li>
                    <li className="navbar-brand">Score: {this.props.score} | Top Score: {this.props.topscore}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;