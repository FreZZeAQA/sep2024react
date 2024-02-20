import {createBrowserRouter, Navigate} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import CommentsPage from "./pages/CommentsPage";
import MainLayout from "./layouts/MainLayout";


const router = createBrowserRouter([
        {
            path: '', element: <MainLayout/>, children: [
                {index: true, element: <Navigate to={'comments'}/>},
                {
                    path: 'comments', element: <CommentsPage/>
                },
                {
                    path: 'users', element: <UsersPage/>, children: [
                        {
                            path: 'comments', element: <CommentsPage/>
                        }
                    ]
                }
            ]
        }
    ]
)

export {
    router
}