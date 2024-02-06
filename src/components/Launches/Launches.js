import React, {useEffect, useState} from 'react';
import Launch from "../Launch/Launch";
import {launchService} from "../../services/LaunchService";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.getAll()
            .then(({data}) => setLaunches(data));
    }, []);

    return (
        <div>
            {launches
                .filter(launch => launch['launch_year'] !== "2020")
                .map((launch, index) => (
                    <Launch key={index} flightInfo={launch}/>
                ))}
        </div>
    );
};

export default Launches;
