import React from 'react';
import styles from './CommentComponent.module.css';

const CommentComponent = ({ comment }) => {
    const {id, name, email, body } = comment;
    return (
        <div className={styles.borderBox}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default CommentComponent;