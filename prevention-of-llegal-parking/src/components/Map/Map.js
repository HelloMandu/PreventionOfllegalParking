import React, { useEffect } from "react";

import {drawMap} from './draw';

import "./Map.scss";

const Map = ({ location, setLocation, parkLocation }) => {
    useEffect(() => {
        drawMap(location, setLocation, parkLocation);
    }, [location, setLocation, parkLocation]);
    return <div id="kakaomap"></div>;
};

export default Map;
