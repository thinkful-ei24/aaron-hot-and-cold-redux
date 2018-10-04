import React from "react";

export default function Help(props) {
  return (
    <div className="App">
      <header>Help</header>
      <p>
        We have randomly chosen a number between 1 and 100. It's your job to
        guess what that number is. We'll give you hints about how close you are
        along the way. If it says you're ice cold, you are more than 50 numbers
        away. If it says cold, you're between 20 and 50 numbers away. Warm is
        10-20 away, and Hot is closer within 10 numbers of the winner.
      </p>
      <button
        onClick={() =>
          props.setState({
            inGame: true
          })
        }
      >
        Back to Current Game
      </button>
      <button
        onClick={() =>
          props.setState({
            inGame: true,
            enteredNumber: null,
            winningNumber: Math.floor(Math.random() * 100),
            guesses: []
          })
        }
      >
        Restart Game
      </button>
    </div>
  );
}
