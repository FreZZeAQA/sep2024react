import React from 'react';

const Character = ({characteristic}) => {
    const {id, name, status, species, type, gender, origin, location, image, episode, url, created} = characteristic
    return (
        <div>
            <h1>{id} {name}</h1>
            <img src={image} alt={name}/>
            <h2>Status: {status}</h2>
            <h2>Species: {species}</h2>
            <h2>Type: {type}</h2>
            <h2>Gender: {gender}</h2>
            <h2>OriginName: {origin.name} <br/> OriginURL: <a href={origin.url}>{origin.url}</a></h2>
            <h2>LocationName: {location.name} <br/> LocationURL: <a href={location.url}>{location.url}</a></h2>
            <h2>Episodes:</h2>
            <ul>
                {episode.map((ep, index) => (
                    <li key={index}>
                        <a href={ep}>{ep}</a>
                    </li>
                ))}
            </ul>
            <h2>URL: <a href={url}>{url}</a></h2>
            <h2>Created: {created}</h2>
            <hr/>
        </div>
    );
};

export {Character};