import axios from "axios";
import {jsonPlaceHolderURL} from "../../constants/urls";


let axiosService = axios.create({baseURL:jsonPlaceHolderURL});

export {
    axiosService
}


