import React from 'react';
import styles from './PostDetails.module.css'

const PostDetails = ({ details }) => {
    const { userId, id, title, body } = details;

    return (
        <div className={styles.postInfoContainer}>
            <h1>{id})PostInfo</h1>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default PostDetails;
