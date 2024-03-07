import React from 'react';
import {Outlet} from "react-router-dom";
import {CarForm} from "../components/CarForm";

const MainLayout = () => {
    return (
        <div>
            <CarForm/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
