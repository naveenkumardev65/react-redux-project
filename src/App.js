import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './store';
import axios from 'axios';

function App(props) {
  const { count, dispatch } = props;
  const [record, setRecord] = useState(false);

  async function fetchUserPosts(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data)
    if(res && res?.length > 0) {
      setRecord(res)
    }
  }

  // Perform api calls before the component mount or inject the DOM.
  useEffect(() => {
    try {
      fetchUserPosts()
    } catch (error) {
      console.log('error', error)
    }
  }, []);


  return (
    <div>
      {record && record?.map((e, i) => {
        return <p key={i}>{e.title}</p>
      })}
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