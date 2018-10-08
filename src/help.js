import React from "react";
import { connect } from 'react-redux';
import { winningNumber, enteredNumber, inGame, noGuesses } from './actions/actions';

function Help(props) {
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
          props.dispatch(inGame(true))
        }
      >
        Back to Current Game
      </button>
      <button
        onClick={() => {
          props.dispatch(inGame(true))
          props.dispatch(enteredNumber(null))
          props.dispatch(winningNumber(Math.floor(Math.random() * 100)))
          props.dispatch(noGuesses())
        }}
      >
        Restart Game
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Help);
