import React from "react";
import { connect } from "react-redux";
import { winningNumber, enteredNumber, noGuesses } from "./actions/actions";

export function Winning(props) {
  return (
    <div className="App">
      <header>You Win!</header>
      <button
        onClick={() => {
          props.dispatch(enteredNumber(null),
          props.dispatch(noGuesses()),
          props.dispatch(winningNumber(Math.floor(Math.random() * 100)))
          );
        }}
      >
        Play Again?
      </button>
    </div>
  );
}

export const mapStateToProps = state => ({
  winningNumber: state.winningNumber,
  guesses: state.guesses,
  enteredNumber: state.enteredNumber
});

export default connect(mapStateToProps)(Winning);
