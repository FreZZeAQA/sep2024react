import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import {postService} from "../../../services/PostService";
import PostDetails from "../PostDetails/PostDetails";


const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetailS, setPostDetails] = useState(null)
    useEffect(() => {
        postService.getAllPosts().then(({data}) => setPosts(data))
    }, []);

    const getPost = (post) => {
        setPostDetails(post)
    }

    return (
        <div>
            {posts.map(value => <Post item={value} getCurrentPost={getPost}  key={value.id}/>)}
            <hr/>
            {postDetailS && <PostDetails details={postDetailS}/>}
        </div>
    );
};

export default Posts;