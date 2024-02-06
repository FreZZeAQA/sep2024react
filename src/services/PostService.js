import {axiosService} from "./axiosService/axiosService";
import {urls} from "../constants/urls";

const postService = {
    getAllPosts:()=>axiosService(urls.posts.postsUrl),
    byId:(id)=>axiosService(urls.posts.byId(id))
}

export {
    postService
}