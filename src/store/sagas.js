import { all } from 'redux-saga/effects'
import counterSaga from './counter/saga';
import postSaga from './post/sagas';


export default function* rootSaga() {
    yield all([
        counterSaga(),
        postSaga()
    ]);
}