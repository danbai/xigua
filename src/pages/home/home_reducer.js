import { ADD, DEL, RESET, RECEIVE_DATA } from 'pages/home/home_action';
import { combineReducers } from 'redux';

function counter(state={count:0}, action) {
    switch (action.type) {
        case ADD:
            return {
                count: state.count + 1
            };
        case DEL:
            return {
                count: state.count - 1
            };
        case RESET:
            return {
                count: 0
            }
        default:
            return state;
    }
}

function roles(state=[], action) {
    switch (action.type) {
        case 'GET_ROLES':
            return ['a', 'b', 'c'];
        default:
            return state;
    }
}


function data(state={}, action) {
    switch (action.type) {
        case 'RECEIVE_DATA':
            return action.data;
        default:
            return state;
    }
}
let homeReducers = combineReducers({
    counter,
    roles,
    data
});

export default homeReducers;