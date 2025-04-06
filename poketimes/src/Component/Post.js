import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Post = () => {
    const { post_id } = useParams(); // grabs the ID from the URL
    const post = useSelector(state => state.posts.find(p => p.id === post_id));

    return (
        <div className="container">
            {post ? (
                <div className="post">
                    <h4 className="center">{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ) : (
                <div className="center">Loading post...</div>
            )}
        </div>
    );
};

export default Post;
