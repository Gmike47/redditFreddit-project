import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card/Card';
import { fetchSubReddits, selectSubReddits } from '../../store/subRedditSlice';
import './SubReddits.css';
import { setSubReddit, selectSelectedSubreddit } from '../../store/redditSlice';

const SubReddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubReddits);
    const selectedSubreddits = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchSubReddits())
    }, [dispatch]);

    return (
        <Card className="subreddit-card" >
            <h2>subreddits</h2>
            <ul className="subreddits-list">
                {subreddits.map((subreddit) => (
                    <li
                    key={subreddit.id}
                    className={`${selectedSubreddits === subreddit.url && 'selected-subreddit'}`}
                    >
                        <button
                        type="button"
                        onClick={() => dispatch(setSubReddit(subreddit.url))}
                        >
                            <img
                            src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`}
                            alt={`${subreddit.display_name}`}
                            className="subreddit-icon"
                            style={{ border: `3px solid ${subreddit.primary_color}` }}
                            />
                            {subreddit.display_name}
                        </button>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default SubReddits;