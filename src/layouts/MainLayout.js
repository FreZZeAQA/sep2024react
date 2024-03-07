import React from 'react';
import {Outlet} from "react-router-dom";
import {Loader} from "../components/Loader";

const MainLayout = () => {
    return (
        <div>
            <Loader/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
