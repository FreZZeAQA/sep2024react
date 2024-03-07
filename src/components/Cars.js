import React, { useEffect } from 'react';
import { carService } from '../services/carService';
import { useDispatch, useSelector } from 'react-redux';
import {carsActions} from '../store/slices/carsSlice';
import { Car } from './Car';

const Cars = () => {
    const dispatch = useDispatch();
    const { cars,trigger } = useSelector((state) => state.cars);

    useEffect(() => {
        carService.getAll().then(({ data }) => {
            dispatch(carsActions.setCars(data));
        });
    }, [dispatch,trigger]);

    return (
        <div>
            {cars.map((car) => (
                <Car key={car.id} car={car} />
            ))}
        </div>
    );
};

export { Cars };
