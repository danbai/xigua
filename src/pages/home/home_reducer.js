import { ADD, DEL, RESET } from 'pages/home/home_action';

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

export default counter;