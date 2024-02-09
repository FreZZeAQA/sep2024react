import React from 'react';
import { useForm } from "react-hook-form";
import { userService } from "../../services/userService";
import styles from './UserFormComponent.module.css'

const UserFormComponent = ({ setUsers }) => {
    const { reset, register, handleSubmit } = useForm();

    const save = (user) => {
        userService.post(user)
            .then(({data}) => {
                setUsers(prevUsers => [...prevUsers, data]);
                reset();
            })
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')} />
            <input type="text" placeholder={'username'} {...register('username')} />
            <input type="text" placeholder={'email'} {...register('email')} />
            <button>Save</button>
        </form>
    );
};

export default UserFormComponent;
