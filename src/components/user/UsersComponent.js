import React, {} from 'react';
import UserComponent from "./UserComponent";


const UsersComponent = ({ users }) => {
    return (
        <div>
            {users.map((user, index) => <UserComponent key={index} user={user} />)}
        </div>
    );
};


export default UsersComponent;
