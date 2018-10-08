import { combineReducers } from 'redux';
import inGameReducer from './inGameReducer';
import guesses from './guesses';
import winningReducer from './winning';
import enteredReducer from './enteredReducer';


const rootReducer = combineReducers({
    inGameReducer,
    guesses,
    winningReducer,
    enteredReducer
});


export default rootReducer;