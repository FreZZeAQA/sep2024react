import React from 'react';

const Character = ({characteristic}) => {
    const {name, img} = characteristic
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name}/>
        </div>
    );
};

export {Character};