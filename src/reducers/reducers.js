import { combineReducers } from 'redux';
import homeReducers from 'pages/home/home_reducer.js';
import homeReducers2 from 'pages/home/home_reducer_2.js';

let appReducer = combineReducers({
    homeReducers,
    homeReducers2
});

export default appReducer;