import React from 'react';
import carService from "../services/carService";

const CarComponent = ({ car, setCarForUpdate, onDelete }) => {
    const { id, brand, price, year } = car;

    const handleDelete = async () => {
        try {
            await carService.deleteItem(id);
            onDelete(id);
        } catch (error) {
            console.error("Error while deleting car:", error);
        }
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update Car</button>
            <button onClick={handleDelete}>Delete Car</button>
            <hr />
        </div>
    );
};

export default CarComponent;
