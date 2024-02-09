import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carService = {
    getAll:()=> apiService.get(urls.cars.base),
    createItem:()=> apiService.post(urls.cars.base),
    updateItem:(id)=> apiService.put(`${urls.cars.base}/${id}`),
    delete:()=>apiService.delete(urls.cars.base)
}


export {
    carService
}