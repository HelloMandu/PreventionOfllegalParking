import React, { useEffect } from "react";
import { useSelector } from "react-redux";


import Map from "../../components/Map/Map";

import "./LocationContainer.scss";

const LocationContainer = ({ pageType, location }) => {
    const parkLocation = useSelector(state => state.parkLocation);
    useEffect(()=>{
        setTimeout(()=>{
            console.log(parkLocation);
        }, 1000);
    }, [])
    return (
        <div className="location-container">
            <Map pageType={pageType} location={location}></Map>
        </div>
    );
};

export default LocationContainer;
