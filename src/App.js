import React, { Component } from "react";
import "./App.css";
import Winning from "./winning";
import NotYetWinning from "./notYetWinning";
import Help from "./help";
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   winningNumber: Math.floor(Math.random() * 100),
    //   enteredNumber: null,
    //   guesses: [],
    //   inGame: true
    // };
  }
  render() {
    console.log(this.props)
    if (!this.props.inGameReducer.inGame) {
      return <Help 
        inGame={this.props.inGameReducer.inGame}
        winningNumber={this.props.winningReducer.winningNumber}
        enteredNumber={this.props.enteredReducer.enteredNumber}
        guesses={this.props.guesses.guesses}
      />;
    }
    if (
      this.props.inGameReducer.inGame &&
      this.props.enteredReducer.enteredNumber !== this.props.winningReducer.winningNumber
    ) {
      return (
        <NotYetWinning
          winningNumber={this.props.winningReducer.winningNumber}
          enteredNumber={this.props.enteredReducer.enteredNumber}
          guesses={this.props.guesses.guesses}
        />
      );
    }
    if (
      this.props.inGameReducer.inGame &&
      this.props.enteredReducer.enteredNumber === this.props.winningReducer.winningNumber
    ) {

      return <Winning 
        winningNumber={this.props.winningReducer.winningNumber}
        enteredNumber={this.props.enteredReducer.enteredNumber}
        guesses={this.props.guesses.guesses}
      />;
    }
  }
}
function mapStateToProps(state) { return state; }

export default connect(mapStateToProps)(App);