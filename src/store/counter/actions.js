import { INCREMENT, DECREMENT, FETCH_USER_DETAILS, FETCH_USER_DETAILS_SUCCESS,
    FETCH_USER_DETAILS_ERROR } from './constants'

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

function fetchUserDetails(loader) {
    return {
        type: FETCH_USER_DETAILS,
        loader
    }
}

function fetchUserDetailsSuccess(records) {
    return {
        type: FETCH_USER_DETAILS_SUCCESS,
        records
    }
}

function fetchUserDetailsError(error) {
    return {
        type: FETCH_USER_DETAILS_ERROR,
        error
    }
}


export {
    increment,
    decrement,
    fetchUserDetails,
    fetchUserDetailsSuccess,
    fetchUserDetailsError
}