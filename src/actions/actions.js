export const IN_GAME = 'IN_GAME';
export const inGame = (value) => {
    return {
        type: IN_GAME,
        value
    };
};

export const GUESSES = 'GUESSES';
export const guesses = (number) => {
    return {
        type: GUESSES,
        number
    };
};

export const WINNING_NUMBER = 'WINNING_NUMBER';
export const winningNumber = (number) => {
    return {
        type: WINNING_NUMBER,
        number
    };
};

export const ENTERED_NUMBER = 'ENTERED_NUMBER';
export const enteredNumber = (number) => {
    return {
        type: ENTERED_NUMBER,
        number
    };
};

export const NO_GUESSES = 'NO_GUESSES';
export const noGuesses = (value) => {
    return {
        type: NO_GUESSES,
        value
    };
};
