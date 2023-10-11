import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import counterReducer from './counter/reducer';
import postReducer from './post/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

const reducers = combineReducers({
    counter: counterReducer,
    posts: postReducer
})

// Store Configuration / Store Initialize
const store = createStore(reducers, compose(...enhancers));


// then run the saga // root saga file
sagaMiddleware.run(rootSaga)

export default store;

// Watch the actions & store values
// store.subscribe(() => console.log('store', store.getState()))

