import { call, put, takeLatest, all } from 'redux-saga/effects'
import { getPostList, getPostDetails } from './rometes';
import { FETCH_POST_LIST, FETCH_POST_DETAILS } from './constant'
import {
    postListSuccess,
    postListError,
    postDetailsSuccess,
    postDetailsError
} from './actions'

// Use only generator function in saga
function* postListSaga() {
    // which action to watch & based on performance by action .
    yield takeLatest(FETCH_POST_LIST, function* updater({ load }) {
        if (load) {
            try {
                // call making api calls.
                // dispatch and Put are same.
                const res = yield call(getPostList);
                if (res) {
                    yield put(postListSuccess(res, 'Successfully get the posts'));
                }
            } catch (err) {
                yield put(postListError('Failed to get the posts'));
            }
        }
    })
}


function* postDetailsSaga() {
    // which action to watch & based on performance by action .
    yield takeLatest(FETCH_POST_DETAILS, function* updater({ id }) {
        if (id) {
            try {
                // call making api calls.
                // dispatch and Put are same.
                const res = yield call(getPostDetails, id);
                if (res) {
                    yield put(postDetailsSuccess(res));
                }
            } catch (err) {
                yield put(postDetailsError('Failed'));
            }
        }
    })
}


export default function* rootSaga() {
    yield all([
        postListSaga(),
        postDetailsSaga()
    ]);
}