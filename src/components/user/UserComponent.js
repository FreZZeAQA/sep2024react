import React from 'react';
import styles from './UserComponent.module.css';

const UserComponent = ({ user }) => {
    const { id, name, username, email, address } = user;

    return (
        <div  className={styles.borderBox}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            {/*<div>*/}
            {/*    <p>Street: {address['street']}</p>*/}
            {/*    <p>Suite: {address['suite']}</p>*/}
            {/*    <p>City: {address['city']}</p>*/}
            {/*    <p>Zip code: {address['zipcode']}</p>*/}
            {/*    <p>lat: {address['geo']['lat']}</p>*/}
            {/*    <p>lng: {address['geo']['lng']}</p>*/}
            {/*</div>*/}

        </div>
    );
};

export default UserComponent;
