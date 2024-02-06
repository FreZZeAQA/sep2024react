const jsonPlaceHolderURL = 'https://jsonplaceholder.typicode.com'

const posts = '/posts'

const urls = {
    posts: {
        postsUrl:posts,
        byId:(id)=>`${posts}/${id}`
    }
}

export {jsonPlaceHolderURL,urls}