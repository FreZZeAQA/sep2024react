import axios from "axios";
import {baseOwuUrl} from "../constants";

const apiService = axios.create({baseURL:baseOwuUrl});


export {apiService}