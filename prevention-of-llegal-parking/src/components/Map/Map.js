import React, { useEffect } from "react";

import {drawMap, drawLocation} from './draw';

import "./Map.scss";

const Map = ({ pageType, location }) => {
    useEffect(() => {
        drawMap(location);
        if (pageType === "location") {
            drawLocation(location);
        }
    }, [location, pageType]);
    return <div id="kakaomap"></div>;
};

export default Map;
