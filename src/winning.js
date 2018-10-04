import React from "react";

export default function Winning(props) {
  return (
    <div className="App">
      <header>You Win!</header>
      <button
        onClick={() =>
          props.setState({
            enteredNumber: null,
            winningNumber: Math.floor(Math.random() * 100),
            guesses: []
          })
        }
      >
        Play Again?
      </button>
    </div>
  );
}
