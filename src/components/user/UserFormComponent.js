import React from 'react';
import { useForm } from "react-hook-form";
import { userService } from "../../services/userService";
import styles from './UserFormComponent.module.css'

const UserFormComponent = ({ setUsers }) => {
    const { reset, formState: { isValid }, register, handleSubmit } = useForm({
        mode: "all"
    });

    const save = async (user) => {
        try {
            const { data } = await userService.post(user);
            setUsers(prevUsers => [...prevUsers, data]);
            reset();
        } catch (error) {
            console.error("Error while saving user:", error);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name', {
                required: true,
                pattern: /^[a-zA-Z '.-]*$/
            })} />
            <input type="text" placeholder={'username'} {...register('username', {
                required: true,
                pattern: /^[a-zA-Z0-9 '.-]*$/
            })} />
            <input type="text" placeholder={'email'} {...register('email', {
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })} />

            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default UserFormComponent;
