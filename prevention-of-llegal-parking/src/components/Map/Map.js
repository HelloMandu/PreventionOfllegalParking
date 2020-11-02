import React, { useEffect } from "react";

import {drawMap, drawParkLocation} from './draw';

import "./Map.scss";

const Map = ({ location, setLocation, parkLocation, filterState }) => {
    useEffect(()=>{
        drawMap(location, setLocation, parkLocation, filterState);
    }, [location, setLocation, parkLocation, filterState])
    // useEffect(() => {
    //     drawParkLocation(parkLocation, filterState);
    // }, [parkLocation, filterState]);
    return <div id="kakaomap"></div>;
};

export default Map;
