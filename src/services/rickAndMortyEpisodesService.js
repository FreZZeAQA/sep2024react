
import { urls} from "../constants/urls";
import {apiService} from "./apiService";



const rickAndMortyEpisodesService = {
    getAll: ({page='1'}) => apiService.get(urls.episodes.base,{params:{page}}),
    getById: (id) => apiService.get(urls.episodes.byId(id))
}

export { rickAndMortyEpisodesService };