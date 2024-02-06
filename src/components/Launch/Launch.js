import React from 'react';
import styles from './Launch.module.css'
const Launch = ({flightInfo}) => {
    let {mission_name, launch_year, links} = flightInfo;
    return (
        <div className={styles.launchInfoContainer}>
            <h1>Mission Name: {mission_name}</h1>
            <h2>Launch Year: {launch_year}</h2>
            <img src={links['mission_patch_small']} alt={mission_name}/>
            <hr/>
        </div>
    );
};

export default Launch;