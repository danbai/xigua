const ADD = 'ADD';
const DEL = 'DEL';
const RESET = 'RESET';

function increment() {
    return {
        type: ADD
    }
}

function decrement() {
    return {
        type: DEL
    }
}

function reset() {
    return {
        type: RESET
    }
}

export {
    increment,
    decrement,
    reset
};