import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Post = () => {
    const { post_id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const post = useSelector(state => state.posts.find(p => p.id === post_id));

    const handleClick = () => {
        dispatch({ type: 'DELETE_POST', id: post_id });
        navigate('/');
    };

    return (
        <div className="container">
            {post ? (
                <div className="post">
                    <h4 className="center">{post.title}</h4>
                    <p>{post.body}</p>
                    <div className="center">
                        <button className="btn grey" onClick={handleClick}>
                            Delete post
                        </button>
                    </div>
                </div>
            ) : (
                <div className="center">Loading post...</div>
            )}
        </div>
    );
};

export default Post;
