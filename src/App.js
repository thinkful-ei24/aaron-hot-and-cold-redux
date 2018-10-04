import React, { Component } from "react";
import "./App.css";
import Winning from "./winning";
import NotYetWinning from "./notYetWinning";
import Help from "./help";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winningNumber: Math.floor(Math.random() * 100),
      enteredNumber: null,
      guesses: [],
      inGame: true
    };
  }
  render() {
    if (!this.state.inGame) {
      return <Help setState={hello => this.setState(hello)} />;
    }
    if (
      this.state.inGame &&
      this.state.enteredNumber !== this.state.winningNumber
    ) {
      return (
        <NotYetWinning
          setState={e => this.setState(e)}
          winningNumber={this.state.winningNumber}
          enteredNumber={this.state.enteredNumber}
          guesses={this.state.guesses}
        />
      );
    }
    if (
      this.state.inGame &&
      this.state.enteredNumber === this.state.winningNumber
    ) {
      return <Winning setState={e => this.setState(e)} />;
    }
  }
}
export default App;