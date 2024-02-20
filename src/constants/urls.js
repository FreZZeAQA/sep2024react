import user from "../components/UsersContainer/User";

const jsonPlaceHolder = 'https://jsonplaceholder.typicode.com'

const users = '/users'

const urls ={
    users:{
        base:`${users}`,
        getPostsByUserId:(id)=>`${users}/${id}/posts`
    }
}


export {
    urls,jsonPlaceHolder
}