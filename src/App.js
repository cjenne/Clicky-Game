import React, { Component } from 'react';
// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import BalloonCard from "./components/BalloonCard";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer"
import balloon from "./balloon.json";
// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//Set initial state
class App extends Component {
  state = {
    balloon,
    clickedballoons: [],
    message: "",
    topscore: 0,
    score: 0
  };

  componentDidMount() {
    console.log(this.state.images)
  }

  //Remove a balloon from the array
  imageClick = event => {
    const currentballoon = event.target.alt;
    const balloonAlreadyClicked =
      this.state.clickedballoons.indexOf(currentballoon) > -1;

    //Click on an already clicked balloon - game restarts
    if (balloonAlreadyClicked) {
      this.setState({
        balloon: this.state.balloon.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedballoons: [],
        score: 0, 
        message: "Try again. Take your pick, B-b-b-Billy boy"
      });

    } else {
      this.setState(
        {
          balloon: this.state.balloon.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedballoons: this.state.clickedballoons.concat(
            currentballoon
          ),
          score: this.state.score + 1
        },

        () => {
          if (this.state.score === 12) {
            this.setState({
              balloon: this.state.balloon.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedballoons: [],
              score: 0,
              message: "Great job! You deserve a balloon."
            });
          }
        if(this.state.score > this.state.topscore) {
          this.setState({ topscore: this.state.score});
        }
      }
      );
    }
  };

  //Render the components
  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topscore={this.state.topscore}
        />
        <Container />
        <div className="wrapper">
        <div className="container-fluid bg-info">
        <div className="row">
          {this.state.balloon.map(balloon => (
            <BalloonCard
              imageClick={this.imageClick}
              id={balloon.id}
              key={balloon.id}
              image={balloon.image}
            />
          ))}
          </div>
</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
