import React from 'react';
import CommentComponent from "./CommentComponent";

const CommentsComponent = ({ comments }) => {
    return (
        <div>
            {comments.map((comment, index) => <CommentComponent key={index} comment={comment} />)}
        </div>
    );
};

export default CommentsComponent;