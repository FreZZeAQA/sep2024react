import axios from "axios";
import {spacexBaseUrl} from "../constants/urls";

const axiosService = axios.create({baseURL: spacexBaseUrl});

export {axiosService}