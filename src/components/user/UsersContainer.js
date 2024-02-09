import React, { useEffect, useState } from 'react';
import UsersComponent from "./UsersComponent";
import { userService } from "../../services/userService";
import UserFormComponent from "./UserFormComponent";
import styles from './UsersContainer.module.css';

const UsersContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(({ data }) => setUsers(data));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <UserFormComponent setUsers={setUsers}/>
                <UsersComponent users={users}/>
            </div>
        </div>
    );
};

export default UsersContainer;
