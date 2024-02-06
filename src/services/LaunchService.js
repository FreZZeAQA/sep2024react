import {axiosService} from "./AxiosService";
import {urls} from "../constants/urls";

const launchService = {
    getAll: () => axiosService(urls.launches.launchesUrl)
}

export {
    launchService
}