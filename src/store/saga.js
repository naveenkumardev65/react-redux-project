import { call, put, takeLatest, all } from 'redux-saga/effects'
import { getUserDetails } from './remotes';
import { FETCH_USER_DETAILS } from './constants'
import { fetchUserDetailsSuccess, fetchUserDetailsError } from './actions'

// Use only generator function in saga
function* mySaga() {
    // which action to watch & based on performance by action .
  yield takeLatest(FETCH_USER_DETAILS, function* updater({ loader }) {
    if(loader) {
        try {
            // call making api calls.
            // dispatch and Put are same.
            const res = yield call(getUserDetails);
            if(res) {
                yield put(fetchUserDetailsSuccess(res));
            }
        } catch (err) {
            yield put(fetchUserDetailsError('Failed'));
        }
    }
  })
}


export default function* rootSaga() {
    yield all([
        mySaga()
    ]);
}