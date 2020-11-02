import React from "react";
import { useSelector } from "react-redux";

import Map from "../../components/Map/Map";
import MyLocation from '../../components/MyLocation/MyLocation';

import "./LocationContainer.scss";

const LocationContainer = ({ location, setLocation, filterState }) => {
    const parkLocation = useSelector((state) => state.parkLocation);
    return (
        <div className="location-container">
            <Map
                location={location}
                setLocation={setLocation}
                parkLocation={parkLocation}
                filterState={filterState}
            ></Map>
            <MyLocation></MyLocation>
        </div>
    );
};

export default LocationContainer;
