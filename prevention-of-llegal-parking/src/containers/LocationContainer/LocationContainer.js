import React from "react";

import Map from "../../components/Map/Map";

import "./LocationContainer.scss";

const LocationContainer = ({ location, setLocation }) => {
    return (
        <div className="location-container">
            <Map location={location} setLocation={setLocation}></Map>
        </div>
    );
};

export default LocationContainer;
