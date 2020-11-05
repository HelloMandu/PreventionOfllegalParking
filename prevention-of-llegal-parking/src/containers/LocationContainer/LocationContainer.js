import React from "react";
import { useSelector } from "react-redux";

import Map from "../../components/Map/Map";

import "./LocationContainer.scss";

const LocationContainer = ({ location, setLocation }) => {
    const parkLocation = useSelector((state) => state.parkLocation);
    return (
        <div className="location-container">
            <Map
                location={location}
                setLocation={setLocation}
                parkLocation={parkLocation}
            ></Map>
        </div>
    );
};

export default LocationContainer;
