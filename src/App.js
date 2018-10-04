import React, { Component } from "react";
import "./App.css";
import Winning from './winning';
import NotYetWinning from './notYetWinning';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winningNumber: Math.floor(Math.random() * 100),
      enteredNumber: null,
      guesses: []
    };
  }

  render() {
    if (this.state.enteredNumber !== this.state.winningNumber) {
      return (
        <NotYetWinning 
          setState={e => this.setState(e)}
          winningNumber={this.state.winningNumber}
          enteredNumber={this.state.enteredNumber}
          guesses={this.state.guesses}
        />
      );
    }
    if (this.state.enteredNumber === this.state.winningNumber) {
      return (
        <Winning 
          setState={(e) => this.setState(e)}
        />
      );
    }
  }
}

export default App;