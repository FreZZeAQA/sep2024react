import { apiService } from "./apiService";
import { urls } from "../constants/urls";

const carService = {
    getAll: () => apiService.get(urls.cars.base),
    createItem: (car) => apiService.post(urls.cars.base, car),
    updateItem: (id, carData) => apiService.put(`${urls.cars.base}/${id}`, carData),
    deleteItem: (id) => apiService.delete(`${urls.cars.base}/${id}`)
};

export default carService;