import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService ={
    getAll:()=>apiService.get(urls.users.base),
    post: (data) => apiService.post(urls.users.base,data)
}

export {
    userService
}