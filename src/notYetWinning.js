import React from "react";
import { connect } from 'react-redux';
import { enteredNumber, winningNumber, guesses, inGame, noGuesses } from './actions/actions';

function NotYetWinning(props) {

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
    
      function guessesFunc() {
        return props.guesses.guesses;
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
          console.log(props.guesses.guesses);
          e.preventDefault();
          props.dispatch(
            enteredNumber(Number(e.currentTarget.someName.value)),
          )
          props.dispatch(
            guesses(Number(e.currentTarget.someName.value))
          )
          e.currentTarget[0].value = "";
        }}
      >
        <input name="someName" type="number" placeholder="1 - 100" />
        <button type="submit">Submit Guess</button>
      </form>
      <p>{feedback()}</p>
      <p>You have made {guessesFunc().length} guesses.</p>
      <p>
        {label()}
        {guessesFunc()
          .toString()
          .replace(/,/g, ", ")}
      </p>
      <button
        onClick={() => {
          props.dispatch(
            enteredNumber(null)
          )
          props.dispatch(
            winningNumber(Math.floor(Math.random() * 100)),
          )
          props.dispatch(
            noGuesses(5)
          )
        }}
      >
        Restart Game
      </button><br />
      <button
        onClick={() =>
          props.dispatch(inGame(false))
        }
      >
        Help
      </button>

    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(NotYetWinning);