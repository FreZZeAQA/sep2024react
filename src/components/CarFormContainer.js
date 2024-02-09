import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import carService from "../services/carService";

const CarFormContainer = ({ setTrigger, setCarForUpdate, carForUpdate }) => {
    const { reset, register, handleSubmit, setValue, formState: { isValid, errors } } = useForm();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, { shouldValidate: true });
            setValue('price', carForUpdate.price, { shouldValidate: true });
            setValue('year', carForUpdate.year, { shouldValidate: true });
        }
    }, [carForUpdate]);

    const validatePrice = (value) => {
        if (!value || value < 1 || value > 1000000000) {
            return "Price must be between 1 and 1000000000";
        }
        return true;
    };

    const validateYear = (value) => {
        const currentYear = new Date().getFullYear();
        if (!value || value < 1990 || value > currentYear) {
            return "Year must be between 1990 and " + currentYear;
        }
        return true;
    };

    const save = async (car) => {
        try {
            if (carForUpdate) {
                await carService.updateItem(carForUpdate.id, car);
            } else {
                await carService.createItem(car);
            }
            setTrigger(prev => !prev);
            reset();
            setCarForUpdate(null);
        } catch (error) {
            console.error("Error while saving car:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/
            })} />
            <input type="number" placeholder={'price'} {...register('price', {
                validate: validatePrice
            })} />
            {errors.price && <p>{errors.price.message}</p>}
            <input type="number" placeholder={'year'} {...register('year', {
                validate: validateYear
            })} />
            {errors.year && <p>{errors.year.message}</p>}
            <button disabled={!isValid} type="submit">Save</button>
        </form>
    );
};

export default CarFormContainer;
