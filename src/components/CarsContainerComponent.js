import React, {useEffect, useState} from 'react';
import CarsComponent from "./CarsComponent";
import {carService} from "../services/carService";
import CarFormContainer from "./CarFormContainer";

const CarsContainerComponent = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState([])
    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger]);
    return (
        <div>
            <CarFormContainer setTrigger={setTrigger} />
            <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsContainerComponent;