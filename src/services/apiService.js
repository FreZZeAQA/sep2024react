import axios from "axios";
import {jsonPlaceHolder} from "../constants/urls";

const apiService = axios.create({baseURL:jsonPlaceHolder});

export {
    apiService
}
