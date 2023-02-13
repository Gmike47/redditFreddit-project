import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AnimatedList } from 'react-animated-list';
import Post from '../post/Post';
import PostLoading from '../post/PostLoading';
import { getRandomNumber } from '../../util/numUtils';
import { fetchPosts, selectFilteredPosts, setSearchTerm, fetchComments } from '../../store/redditSlice';
import './Home.css';

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, subReddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(subReddit));
    }, [subReddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };

        return getComments;
    };

    if (isLoading) {
        return (
            <AnimatedList animation="zoom">
                {Array(getRandomNumber(3, 10)).fill(<PostLoading />)}
            </AnimatedList>
        );
    };

    if (error) {
        return (
            <div className="error">
                <h2>Failed to load posts</h2>
                <button type="button" onClick={() => dispatch(fetchPosts(subReddit))}>
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