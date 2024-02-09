import React from 'react';
import { useForm } from "react-hook-form";
import styles from './CommentFormComponent.module.css';
import { commentService } from "../../services/commentService";

const CommentFormComponent = ({ setComments }) => {
    const { reset, handleSubmit, register } = useForm();

    const save = (comment) => {
        commentService.post(comment)
            .then(({data}) => {
                setComments(prevComments => [...prevComments, data]);
                reset();
            })
    };

    return (
        <form className={styles.postContainer} onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'postId'} {...register('postId')} />
            <input type="text" placeholder={'name'} {...register('name')} />
            <input type="text" placeholder={'email'} {...register('email')} />
            <input type="text" placeholder={'body'} {...register('body')} />
            <button type="submit">Save</button>
        </form>
    );
};

export default CommentFormComponent;