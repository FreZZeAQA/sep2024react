import React from 'react';
import UsersContainer from "./components/user/UsersContainer";
import CommentsContainer from "./components/comment/CommentsContainer";


const App = () => {
    return (
        <div>
            <UsersContainer/>
            <CommentsContainer/>
        </div>
    );
};

export default App;