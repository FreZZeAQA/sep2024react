import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {carsActions} from '../store/slices/carsSlice';
import { Car } from './Car';
import {CarForm} from "./CarForm";

const Cars = () => {
    const dispatch = useDispatch();
    const { cars,trigger } = useSelector((state) => state.cars);

    useEffect(() => {
        dispatch(carsActions.getAll())
    }, [dispatch,trigger]);

    return (
        <div>
            <CarForm/>
            {cars.map((car) => (
                <Car key={car.id} car={car} />
            ))}
        </div>
    );
};

export { Cars };
