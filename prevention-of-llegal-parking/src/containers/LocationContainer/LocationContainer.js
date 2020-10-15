import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../../modules/location";

import Search from "../../components/Search/Search";
import Map from "../../components/Map/Map";

const LocationContainer = () => {
    const dispatch = useDispatch();
    const handleGPS = useCallback(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            dispatch(setLocation(location));
            console.log("locationInit");
        });
    }, [dispatch]);
    return (
        <div className="location-container">
            <Search handleGPS={handleGPS}></Search>
            {/* <Map></Map> */}
        </div>
    );
};

export default LocationContainer;
