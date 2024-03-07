import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {useSelector} from "react-redux";

const Loader = () => {
    const {loading} = useSelector(state => state.cars);

    return (
        <div>
            {loading && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                <CircularProgress/>
            </div>}
        </div>

    );
};

export {Loader};