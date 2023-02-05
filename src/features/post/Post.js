import React, { useState } from "react";
import Skeleton from 'react-loading-skeleton';
import './Post.css';
import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage
} from 'react-icoms/ti';
import moment from 'moment';
import shortenNumber from '../../util';
import Card from '../../components/Card/Card';
import Commnet from '../Comment/Comment';
import ProfilePic from '../PP/ProfilePic';

const Post = (props) => {
    const [ voteValue, setVoteValue ] = useState(0);
    const { post, onToggleComments } = props;

    const onHandleVote = (newValue) => {
        if (newValue === voteValue) {
            setVoteValue(0);
        } else if (newValue === 1) {
            setVoteValue(1);
        } else {
            setVoteValue(-1);
        }
    };

    const renderUpvote = () => {
        if (voteValue === 1) {
            return <TiArrowUpThick className="icon-action" />;
        }
        return <TiArrowUpOutline className="icon-action" />;
    };
    
    const renderDownvote = () => {
        if (voteValue === -1) {
            return <TiArrowDownThick className="icon-action" />;
        }
        return <TiArrowDownOutline className="icon-action" />;
    };

    const getVoteType = () => {
        if (voteValue === 1) {
            return 'up-vote';
        } else if (voteValue === -1) {
            return 'down-vote';
        } else {
            return '';
        }
    };

    const renderComments = () => {
        if (post.errorComments) {
            return (
                <div>
                    <h3>Error loading comments</h3>
                </div>
            );
        }
        if (post.loadingComments) {
            return (
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            );
        }
        if (post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
                        <Commnet comment={comment} key={comment.id} />
                    ))}
                </div>
            );
        }

        return null;
    };

    return (
        <article key={post.id}>
            <Card >
            <div className="post-wrapper">
                <div className="post-votes-container">
                    <button
                    type="button"
                    className={`icon-action-button-up-vote ${
                        voteValue === 1 && 'active'
                    }`}
                    onClick={() => onHandleVote(1)}
                    aria-label="Up vote"
                    >
                        {renderUpvote()}
                    </button>
                    <p className={`post-vote-value ${getVoteType()}`}>
                        {shortenNumber(post.ups, 1)}
                    </p>
                    <button
                    type="button"
                    className={`icon-action-button-down-vote ${
                        voteValue === -1 && 'active'
                    }`}
                    onClick={() => onHandleVote(-1)}
                    aria-label="Down vote"
                    >
                        {renderDownvote()}
                    </button>
                </div>
                <div className="post-container">
                    <h3 className="post-title">{post.title}</h3>
                    <div className="post-image-container">
                        <img src={post.url} alt="" className="post-image" />
                    </div>
                    <div className="post-details">
                        <span className="author-details">
                            <ProfilePic name={post.author} />
                            <span className="author-username">{post.author}</span>
                        </span>
                        <span>{moment.unix(post.created_utc).fromNow()}</span>
                        <span className="post-comments-container">
                            <button
                            type="button"
                            className={`icon-action-button ${
                                post.showingComments && 'showing-comments'
                            }`}
                            onClick={() => onToggleComments(post.permalink)}
                            >
                                <TiMessage className="icon-action" />
                            </button>
                            {shortenNumber(post.num_comments, 1)}
                        </span>
                    </div>
                    {renderComments()}
                </div>
            </div>
          </ Card>
        </article>
    );
};

export default Post;