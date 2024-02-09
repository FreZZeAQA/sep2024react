import React, { useEffect, useState } from 'react';
import CarsComponent from "./CarsComponent";
import carService from "../services/carService";
import CarFormContainer from "./CarFormContainer";

const CarsContainerComponent = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll()
            .then(({ data }) => setCars(data))
            .catch(error => {
                console.error("Error while fetching cars:", error);
            });
    }, [trigger]);

    const handleDelete = (id) => {
        setCars(prevCars => prevCars.filter(car => car.id !== id));
    };

    return (
        <div>
            <CarFormContainer setTrigger={setTrigger} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate} />
            <CarsComponent cars={cars} setCarForUpdate={setCarForUpdate} onDelete={handleDelete} /> {/* Передаємо функцію видалення */}
        </div>
    );
};

export default CarsContainerComponent;
