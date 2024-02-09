import React, { useEffect, useState } from 'react';
import { commentService } from "../../services/commentService";
import CommentsComponent from "./CommentsComponent";
import CommentFormComponent from "./CommentFormComponent";
import styles from "./CommentsContainer.module.css";

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll()
            .then(({ data }) => setComments(data))
            .catch(error => console.error("Error fetching comments:", error));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <CommentFormComponent setComments={setComments} />
                <CommentsComponent comments={comments} />
            </div>
        </div>
    );
};

export default CommentsContainer;