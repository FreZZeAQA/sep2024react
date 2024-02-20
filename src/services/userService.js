import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService = {
    getAll:()=>apiService.get(urls.users.base),
    getPostsById:(id)=>apiService.get((urls.users.getPostsByUserId(id)))
}


export {
    userService
}