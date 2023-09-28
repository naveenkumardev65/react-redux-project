import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

// Store Configuration / Store Initialize
const store = createStore(appReducer, compose(...enhancers));


// then run the saga // root saga file
sagaMiddleware.run(mySaga)

export default store;


store.subscribe(() => console.log('store', store.getState()))

