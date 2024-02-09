import axios from "axios";
import {owuUrl} from "../constants/urls";

const apiService = axios.create({baseURL:owuUrl});

export {
    apiService
}
