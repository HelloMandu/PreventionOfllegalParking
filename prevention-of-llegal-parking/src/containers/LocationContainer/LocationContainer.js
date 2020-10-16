import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../../modules/location";

import Search from "../../components/Search/Search";
import Map from "../../components/Map/Map";

import "./LocationContainer.scss";

const LocationContainer = () => {
    const [onMap, setOnMap] = useState(false);
    const location = useSelector((state) => state.location);
    const dispatch = useDispatch();
    const handleGPS = useCallback(() => {

        setOnMap(!onMap);
    }, [onMap]);
    return (
        <div className="location-page">
            <div className="location-container">
                <Search handleGPS={handleGPS}></Search>
                <Map
                    onMap={onMap}
                    location={location}
                ></Map>
            </div>
        </div>
    );
};

export default LocationContainer;
