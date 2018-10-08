import {ENTERED_NUMBER} from '../actions/actions';

const initialState = {
    enteredNumber: null
};

const enteredReducer = (state = initialState, action) => {
    if (action.type === ENTERED_NUMBER) {
        return Object.assign({}, state, {
            enteredNumber: action.number
        });
    }
    else {
        return state;
    }
};

export default enteredReducer;