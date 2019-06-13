import counter from 'pages/home/home_reducer';

function combineReducers(state={}, action) {
    return {
        counter: counter(state.counter, action)
    }
}

export default combineReducers;