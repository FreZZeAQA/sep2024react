import React from 'react';

const CarComponent = ({car}) => {
    const {id,brand,price,year} = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button>Create Car</button>
            <button>Update Car</button>
            <button>Delete Car</button>
            <hr/>
        </div>
    );
};

export default CarComponent;