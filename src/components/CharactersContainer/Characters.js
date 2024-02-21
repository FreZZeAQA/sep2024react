
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { rickAndMortyEpisodesService } from "../../services/rickAndMortyEpisodesService";
import Character from "./Character";


const Characters = () => {
    const { id } = useParams();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        rickAndMortyEpisodesService.getById(id).then(({ data }) => {
            setCharacters(data.characters);
        });
    }, []);


    return (
        <div>
            <h2>Characters for Episode {id}</h2>
            {characters.map((character, index) => (
                <Character key={index} url={character} />
            ))}
        </div>
    );
};

export default Characters;
