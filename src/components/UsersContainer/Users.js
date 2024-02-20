import React, {useEffect, useState} from 'react';
import {userService} from "../../services/userService";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, []);
    return (
        <div>
            {users.map(data=><User key={data.id} user={data}/>)}
        </div>
    );
};

export default Users;