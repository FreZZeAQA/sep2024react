import React  from 'react';
import {useDispatch} from "react-redux";
import {carsActions} from "../store/slices/carsSlice";
import {carService} from "../services/carService";

const Car = ({ car }) => {
    const { id, brand, price, year } = car;
    const dispatch = useDispatch();
    
    const deleteById = async () => {
      await carService.deleteById(car.id)
        dispatch(carsActions.trigger())
    }


    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carsActions.setCarForUpdate(car))}>Update</button>
            <button onClick={deleteById}>Delete</button>
            <hr />
        </div>
    );
};

export { Car };