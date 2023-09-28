import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUserDetails } from './store/actions';

import {
  selectCounter,
  selectLoading,
  selectRecords,
  selectError,
  selectSuccess
} from './store/selectors'

function App(props) {
  const { dispatch, loading, records, error, success, } = props;


  // Perform api calls before the component mount or inject the DOM.
  useEffect(() => {
    dispatch(fetchUserDetails(true))
  }, []);


  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {records && records?.map((e, i) => {
        return <p key={i}>{e.title}</p>
      })}
    </div>
  )
}


// State props
const mapStateToProps = (state) => {
  return {
    count: selectCounter(state),
    loading: selectLoading(state),
    records: selectRecords(state),
    error: selectError(state),
    success: selectSuccess(state),
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