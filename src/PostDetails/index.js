import React, { useEffect } from 'react';
import { postDetails } from '../store/post/actions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


function PostDetails(props) {
    const { dispatch, record, loading } = props;
    const params = useParams();

    useEffect(() => {
        dispatch(postDetails(params?.id))
    }, []);


    if (loading) {
        return <h3>Fetching post details...</h3>;
    }

    return (
        <div>
            <h2>PostDetails</h2>
            <p><b>Post id:</b> {record?.id}</p>
            <p><b>Title:</b> {record?.title}</p>
            <p><b>Description:</b> {record?.body}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        record: state && state?.posts && state.posts.record || {},
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

export default connect(mapStateToProps, mapStateToDispatch)(PostDetails);
