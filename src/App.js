import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './store';

function App(props) {
  const { count, dispatch } = props;
  return (
    <div>
      <h4>Count- {count}</h4>
      <button  onClick={() => dispatch(increment(75))}>+</button>
      <button disabled={count <= 0 ? true : false} onClick={() => dispatch(decrement(20))}>-</button>
    </div>
  )
}



// Selector
function getCounter(state) {
  return state && state?.count || 0
}

// State props
const mapStateToProps = (state) => {
  return {
    count: getCounter(state)
  }
}

// Dispatcher
const mapStateToDispatch = (dispatch) => {
  return {
    dispatch
  }
}

// connecting store into App component.
export default connect(mapStateToProps, mapStateToDispatch)(App);