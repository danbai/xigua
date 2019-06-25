const ADD = 'ADD';
const DEL = 'DEL';
const RESET = 'RESET';
const GET_ROLES = 'GET_ROLES';
const GET_PERSON = 'GET_PERSON';
const RECEIVE_DATA = 'RECEIVE_DATA';

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

function getRoles() {
    return {
        type: 'GET_ROLES'
    }
}

function getPerson() {
    return {
        type: 'GET_PERSON'
    }
}

function receiveData(res) {
    return {
        type: 'RECEIVE_DATA',
        data: res
    }
}

function getData(url) {
    return (dispatch) => {
        fetch(url).then(res => res.json())
            .then(json => {
                dispatch(receiveData(json));
            })
    }
}

export {
    ADD,
    DEL,
    RESET,
    GET_ROLES,
    GET_PERSON,
    RECEIVE_DATA,
    increment,
    decrement,
    reset,
    getRoles,
    getPerson,
    getData
};