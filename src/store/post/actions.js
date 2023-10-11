import { FETCH_POST_LIST, FETCH_POST_LIST_SUCCESS, FETCH_POST_LIST_ERROR, FETCH_POST_DETAILS, FETCH_POST_DETAILS_ERROR, FETCH_POST_DETAILS_SUCCESS } from './constant';

/**
 * 
 * @param {boolean} load 
 * @returns 
 */
function postList(load) {
    return {
        type: FETCH_POST_LIST,
        load
    }
}

/**
 * 
 * @param {Array} records 
 * @param {string} success 
 * @returns 
 */
function postListSuccess(records, success) {
    return {
        type: FETCH_POST_LIST_SUCCESS,
        records,
        success
    }
}

function postListError(error) {
    return {
        type: FETCH_POST_LIST_ERROR,
        error
    }
}

/**
 * 
 * @param {boolean} load 
 * @returns 
 */
function postDetails(id) {
    return {
        type: FETCH_POST_DETAILS,
        id
    }
}

/**
 * 
 * @param {object} record 
 * @returns 
 */
function postDetailsSuccess(record) {
    return {
        type: FETCH_POST_DETAILS_SUCCESS,
        record
    }
}

function postDetailsError(error) {
    return {
        type: FETCH_POST_DETAILS_ERROR,
        error
    }
}



export {
    postList,
    postListSuccess,
    postListError,
    postDetails,
    postDetailsSuccess,
    postDetailsError
}