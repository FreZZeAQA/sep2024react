import {createBrowserRouter, Navigate} from "react-router-dom";
import {CarsPage} from "./pages/CarsPage";
import {MainLayout} from "./layouts";



const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'cars'}/>
            },
            {
                path: 'cars', element: <CarsPage/>
            }
        ]
    }
])

export {
    router
}