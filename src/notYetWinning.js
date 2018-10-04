import React from "react";

export default function NotYetWinning(props) {

    function feedback() {
        if (!props.enteredNumber) {
          return "";
        }
        if (Math.abs(props.winningNumber - props.enteredNumber) > 50) {
          return "You are ice cold";
        }
        if (Math.abs(props.winningNumber - props.enteredNumber) > 20) {
          return "You are cold";
        }
        if (Math.abs(props.winningNumber - props.enteredNumber) > 10) {
          return "You are warm";
        }
        if (Math.abs(props.winningNumber - props.enteredNumber) > 0) {
          return "You are hot";
        }
      }
    
      function guesses() {
        return props.guesses;
      }
    
      function label() {
        if(props.guesses.length > 0) {
          return 'Past Guesses: '
        }
        else {
          return '';
        }
      }
  return (
    <div className="App">
      <header>Hot or Cold Game</header>
      <p>Guess a number between 1 and 100, we'll tell you how close you are.</p>
      <form
        className="numForm"
        onSubmit={e => {
          e.preventDefault();
          props.setState({
            enteredNumber: Number(e.currentTarget[0].value),
            guesses: [...props.guesses, Number(e.currentTarget[0].value)]
          });
          e.currentTarget[0].value = "";
        }}
      >
        <input type="number" placeholder="1 - 100" />
        <button type="submit">Submit Guess</button>
      </form>
      <p>{feedback()}</p>
      <p>
        {label()}
        {guesses()
          .toString()
          .replace(/,/g, ", ")}
      </p>
      <button
        onClick={() =>
          props.setState({
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
