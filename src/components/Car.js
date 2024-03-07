import React from 'react';
import {useDispatch} from "react-redux";
import {carsActions} from "../store/slices/carsSlice";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();


    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carsActions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => dispatch(carsActions.deleteByID({id}))}>Delete</button>
            <hr/>
        </div>
    );
};

export {Car};