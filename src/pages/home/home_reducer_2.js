import { GET_PERSON } from 'pages/home/home_action';
import { combineReducers } from 'redux';

function person(state=[], action) {
    switch (action.type) {
        case GET_PERSON:
            return [{
                age: 1,
                id: 1,
                name: 'a'
            }, {
                age: 2,
                id:2,
                name: 'b'
            }, {
                age: 3,
                id: 3,
                name: 'c'
            }];
        default:
            return state;
    }
}

let homeReducers2 = combineReducers({
    person
});

export default homeReducers2;