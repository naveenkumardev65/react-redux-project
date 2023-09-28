import { createStore } from 'redux';


// Constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// initial store value
const initialState = {
    count: 0
}

//actions
function increment(value) {
    return {
        type: INCREMENT,
        value
    }
}

function decrement(val) {
    return {
        type: DECREMENT,
        val
    }
}


const appReducer = (state=initialState, action) => {
    switch(action.type) {
        case INCREMENT: 
            return { ...state, count: state.count + action.value};
        case DECREMENT: 
            return { ...state, count: state.count - action.val };
        default:
            return state;
    }
}


 const store = createStore(appReducer);

 export default store;

 export {
    increment,
    decrement
 }
