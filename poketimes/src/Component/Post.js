import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    const { post_id } = useParams(); // ✅ get param from route
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
            .then(res => {
                setPost(res.data);
            })
            .catch(err => {
                console.error("Failed to fetch post:", err);
            });
    }, [post_id]);

    return (
        <div className="container">
            {post ? (
                <div className="post">
                    <h4 className='center'>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ) : (
                <div className="center">Loading post...</div>
            )}
        </div>
    );
};

export default Post;
