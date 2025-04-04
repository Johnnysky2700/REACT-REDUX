import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

const Home = () => {
    const [posts, setPosts] = useState([]); // ✅ Use state to store posts

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log("API Response:", res.data);
                setPosts(res.data.slice(0, 10)); // ✅ Set the first 10 posts
            })
            .catch(err => {
                console.error("Error fetching posts:", err);
            });
    }, []); // ✅ Runs only once when the component mounts

    return (
        <div className="container">
            <h4 className="center">Home</h4>
            {posts.length ? (
                posts.map(post => (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                            <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="center">No posts yet</div>
            )}
        </div>
    );
};

export default Home;
