//Navbar Component
import React, { Component } from "react";


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default sticky-top bg-danger">
                    <span className="navbar-brand font-weight-bold">Clicky Game!</span>
                    <span className="navbar-brand">{this.props.message}</span>
                    <span className="navbar-brand">Score: {this.props.score} | Top Score: {this.props.topscore}</span>
            </nav>
        );
    }
}

export default Navbar;