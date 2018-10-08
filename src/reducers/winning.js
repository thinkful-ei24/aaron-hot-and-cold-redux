import {WINNING_NUMBER} from '../actions/actions';

const initialState = {
    winningNumber: Math.floor(Math.random() * 100)
};

const winningReducer = (state = initialState, action) => {
    if (action.type === WINNING_NUMBER) {
        return Object.assign({}, state, {
            winningNumber: action.number
        });
    }
    else {
        return state;
    }
};

export default winningReducer;