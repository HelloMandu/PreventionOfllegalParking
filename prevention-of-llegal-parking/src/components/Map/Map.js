import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { console } from "window-or-global";

import {drawMap, drawLocation, drawBusan} from './draw';

import "./Map.scss";

const Map = ({ pageType, location }) => {
    const parkLocation = useSelector(state => state.parkLocation);
    useEffect(() => {
        // drawMap(location);
        // if (pageType === "location") {
        //     console.log(parkLocation);
        //     drawLocation(location, parkLocation);
        // }
        drawBusan(location);
    }, [location, pageType]);
    return <div id="kakaomap"></div>;
};

export default Map;
