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


const mapStateToProps = (state) => {
  return {
    count: state && state?.count || 0
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(App);