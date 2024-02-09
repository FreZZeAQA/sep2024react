import React from 'react';
import CarComponent from "./CarComponent";

const CarsComponent = ({cars}) => {
    return (
        <div>
            {cars.map((data,index)=><CarComponent key={index} car={data}/>)}
        </div>
    );
};

export default CarsComponent;