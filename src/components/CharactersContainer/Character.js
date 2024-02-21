import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {apiService} from "../../services/apiService";

const Character = ({ url }) => {
    const [characterInfo, setCharacterInfo] = useState(null);

    useEffect(() => {
        apiService.get(url)
            .then(response => {
                setCharacterInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching character info:', error);
            });
    }, [url]);

    return (
        <div>
            {characterInfo ? (
                <>
                    <h3>{characterInfo.name}</h3>
                    <img src={characterInfo.image} alt={characterInfo.name} />
                </>
            ) : (
                <p>Loading character info...</p>
            )}
        </div>
    );
};

export default Character;
