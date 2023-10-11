import { 
    FETCH_POST_LIST, 
    FETCH_POST_LIST_SUCCESS, 
    FETCH_POST_LIST_ERROR, 
    FETCH_POST_DETAILS, 
    FETCH_POST_DETAILS_ERROR, 
    FETCH_POST_DETAILS_SUCCESS
} from './constant';


// initial store value
const initialState = {
    records: [],
    record: {},
    loading: false,
    error: false,
    success: false
}


// Reducer
const postReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_POST_LIST: 
            return { 
                ...state, 
                loading: true,
                error: false,
                success: false
            };
        case FETCH_POST_LIST_SUCCESS: 
            return { 
                ...state, 
                loading: false,
                success: action.success,
                error: false,
                records: [...state.records, ...action.records]
             };
        case FETCH_POST_LIST_ERROR: 
            return { 
                ...state, 
                loading: false, 
                success: false, 
                error: action.error
            };
        case FETCH_POST_DETAILS: 
            return { 
                ...state, 
                loading: true,
                error: false,
                success: false
            };
        case FETCH_POST_DETAILS_SUCCESS: 
            return { 
                ...state, 
                loading: false,
                success: false,
                error: false,
                record: Object.assign({}, state.record, { ...action.record })
            };
        case FETCH_POST_DETAILS_ERROR: 
            return { 
                ...state, 
                loading: false, 
                success: false, 
                error: action.error
            };
        default:
            return state;
    }
}

export default postReducer;
