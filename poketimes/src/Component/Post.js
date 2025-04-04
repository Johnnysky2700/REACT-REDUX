import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { post_id } = useParams(); // ✅ Get route param
    const [id, setId] = useState(null);

    useEffect(() => {
        setId(post_id); // ✅ Set the id
    }, [post_id]);

    return (
        <div className="container">
            <h4>{id}</h4>
        </div>
    );
};

export default Post;
