import React from 'react';
import {Character} from "./components/Character";

const App = () => {
    const characters = [
        {
            id:1,
            name: 'Homer',
            img: 'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'
        },
        {
            id:2,
            name: 'Marge',
            img: 'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'
        },
        {
            id:3,
            name: 'Meggy',
            img: 'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'
        },
        {
            id:4,
            name: 'Bart',
            img: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        },
        {
            id:5,
            name: 'Lisa',
            img: 'https://upload.wikimedia.org/wikipedia/uk/thumb/a/ae/Lisasmiling.png/255px-Lisasmiling.png'
        }
    ]
    return (
        <div>
            {characters.map(character => <Character characteristic={character} key={character.id}/>)}
        </div>
    );
};

export {App};