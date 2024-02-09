import React from 'react';
import CarComponent from "./CarComponent";

const CarsComponent = ({ cars, setCarForUpdate, onDelete }) => {
    return (
        <div>
            {cars.map((data, index) => (
                <CarComponent
                    key={index}
                    car={data}
                    setCarForUpdate={setCarForUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default CarsComponent;
