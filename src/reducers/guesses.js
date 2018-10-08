import { GUESSES, NO_GUESSES } from "../actions/actions";

const initialProps = {
  guesses: []
};

const guessesReducer = (props = initialProps, action) => {
  if (action.type === GUESSES) {
    return Object.assign({}, props, {
      guesses: [...props.guesses, action.number]
    });
  }
  if (action.type === NO_GUESSES) {
    return Object.assign({}, props, {
      guesses: []
    });
  } else {
    return props;
  }
};

export default guessesReducer;
