import React from 'react';
import { useForm } from "react-hook-form";
import styles from './CommentFormComponent.module.css';
import { commentService } from "../../services/commentService";

const CommentFormComponent = ({ setComments }) => {
    const { reset, formState: { isValid }, handleSubmit, register } = useForm({
        mode: "all"
    });

    const save = async (comment) => {
        try {
            const { data } = await commentService.post(comment);
            setComments(prev => [...prev, data]);
            reset();
        } catch (error) {
            console.error("Error while saving comment:", error);
        }
    };

    return (
        <form className={styles.postContainer} onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name', {
                required: true,
                pattern: /^[a-zA-Z '.-]*$/,
            })} />
            <input type="text" placeholder={'email'} {...register('email', {
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })} />
            <input type="text" placeholder={'body'} {...register('body', {
                required: true,
                pattern: /^.{1,100}$/,
            })} />
            <button type="submit" disabled={!isValid}>Save</button>
        </form>
    );
};

export default CommentFormComponent;
