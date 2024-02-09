import axios from "axios";
import {jsonPlaceHolderUrl} from "../constants/urls";

const apiService = axios.create({baseURL:jsonPlaceHolderUrl})


export{
    apiService
}