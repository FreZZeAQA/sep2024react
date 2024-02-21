import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import EpisodesPage from "./pages/EpisodesPage";
import CharactersPage from "./pages/CharactersPage";
import Characters from "./components/CharactersContainer/Characters";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'episodes'}/>
            },
            {
                path: 'episodes', element: <EpisodesPage/>
            },
            {
                path: 'characters/:id', element: <Characters/>
            }

        ]
    }
])

export {
    router
}