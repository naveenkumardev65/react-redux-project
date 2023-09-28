import { INCREMENT, DECREMENT, FETCH_USER_DETAILS, FETCH_USER_DETAILS_SUCCESS, FETCH_USER_DETAILS_ERROR } from './constants'


// initial store value
const initialState = {
    count: 0,
    records: [],
    loading: false,
    error: false,
    success: false
}


// Reducer
const appReducer = (state=initialState, action) => {
    switch(action.type) {
        case INCREMENT: 
            return { ...state, count: state.count + action.value};
        case DECREMENT: 
            return { ...state, count: state.count - action.val };
        case FETCH_USER_DETAILS: 
            return { ...state, loading: true, success: false, error: false };
        case FETCH_USER_DETAILS_SUCCESS: 
            return { ...state, records: action.records, success: true, loading: false };
        case FETCH_USER_DETAILS_ERROR: 
            return { ...state, error: action.error, loading: false };
        default:
            return state;
    }
}

export default appReducer;
