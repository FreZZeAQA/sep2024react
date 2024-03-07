import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../store/slices/carsSlice";

const CarForm = () => {
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const { reset, register, setValue, handleSubmit } = useForm({
        mode: 'all',
    });

    useEffect(() => {
        if (carForUpdate){
            setValue('brand',carForUpdate.brand)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)
        }
    }, [carForUpdate,setValue]);

    const save = async (car) => {
        dispatch(carsActions.create({car}))
        reset()
    }

    const update = async (car) => {
        await dispatch(carsActions.updateById({ id: carForUpdate.id, carData: car }))
        reset()
    }


    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder="brand" {...register('brand')} />
            <input type="text" placeholder="price" {...register('price')} />
            <input type="text" placeholder="year" {...register('year')} />
            <button>{carForUpdate?'update':'save'}</button>
        </form>
    );
};

export { CarForm };