import React, { useEffect } from 'react'
import { postList } from '../store/post/actions';
import { connect } from 'react-redux';
import { useLocation, Outlet, useParams, Link } from 'react-router-dom';

function Posts(props) {
  const { dispatch, records, loading, success, error } = props;
  const location = useLocation();

  // const fullpage = location && location?.pathname === "/post" ? true :false;

  useEffect(() => {
    dispatch(postList(true));
  }, []);

  if (loading) {
    return <h3>Loading...</h3>
  }

  // if(fullpage) {
  //   return <Outlet />
  // }

  return (
    <div>
      Post list:
      <ol>
        {records && records?.map((e, i) => {
          return <li key={i}>
            <Link to={`/post/${e.id}`}>{e.title}</Link>
          </li>
        })}
      </ol>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    records: state && state?.posts && state.posts.records || [],
    loading: state && state?.posts && state.posts?.loading || false,
    error: state && state?.posts && state.posts?.error || false,
    success: state && state?.posts && state.posts?.success || false,
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Posts);