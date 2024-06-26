import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Post from '../post/Post';
import PostLoading from '../post/PostLoading';
import { getRandomNumber } from '../../util/numUtils';
import { fetchPosts, selectFilteredPosts, setSearchTerm, fetchComments } from '../../store/redditSlice';
import './Home.css';

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit, dispatch]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };

        return getComments;
    };

    if (isLoading) {
        return (
            <div>
                {Array(getRandomNumber(3, 10)).fill(<PostLoading />)}
            </div>
        );
    };

    if (error) {
        return (
            <div className="error">
                <h2>Failed to load posts</h2>
                <button type="button" onClick={() => dispatch(fetchPosts(selectedSubreddit))}>
                    Give it another go ;)
                </button>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="error">
                <h2>no posts matching "{searchTerm}"</h2>
                <button type="button" onClick={() => dispatch(setSearchTerm(''))} >
                    Go home
                </button>
            </div>
        );
    };

    return (
        <>
            {posts.map((post, index) => (
                <Post
                key={post.id}
                post={post}
                onToggleComments={onToggleComments(index)}
                />
            ))}
        </>
    );
};

export default Home;