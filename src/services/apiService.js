import axios from "axios";
import {rickAndMortyEndPoint} from "../constants/urls";

const apiService = axios.create({baseURL:rickAndMortyEndPoint});


export {apiService}