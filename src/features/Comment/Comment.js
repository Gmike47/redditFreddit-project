import React from "react";
import moment from 'moment';
import ReactMarkDown from 'react-markdown';
import './Comment.css';
import ProfilePic from '../PP/ProfilePic';

const Comment = (props) => {
    const { comment } = props;
    return (
        <div className="comment">
            <div className="comment-metadata">
                <ProfilePic name={comment.author} />
                <p className="comment-author">{comment.author}</p>
                <p className="comment-created-time">{moment.unix(comment.created_utc).fromNow()}</p>
            </div>
            <ReactMarkDown source={comment.body} />
        </div>
    );
};

export default Comment;