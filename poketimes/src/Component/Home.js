import React from "react";
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

const Home = (props) => {
    const { posts } = props;

    return (
        <div className="container home">
            <h4 className="center">Home</h4>
            {posts.length ? (
                posts.map(post => (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps)(Home);
