import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";

const CarFormContainer = ({setTrigger}) => {
    const {reset,register,handleSubmit} = useForm();

    const save = (car) => {
        carService.createItem(car)
        setTrigger(prev=>!prev)
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'id'} {...register('id')}/>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
        </form>
    );
};

export default CarFormContainer;