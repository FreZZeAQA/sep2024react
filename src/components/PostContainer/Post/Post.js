import React from 'react';
import styles from './Post.module.css';

const Post = ({item,getCurrentPost}) => {
    let {id, title} = item;

    return (
        <div className={styles.postContainer}>
            <h4>{id} {title}</h4>
            <button onClick={() => {
                getCurrentPost(item)
            }}>PostInfo
            </button>
        </div>
    );
};

export default Post;
