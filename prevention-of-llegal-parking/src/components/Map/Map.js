import React, { useEffect, useRef } from "react";
import { drawMap } from "./draw";

import "./Map.scss";

const Map = ({ location, setLocation, parkLocation, type }) => {
    const mapLevel = useRef(1);
    const mapType = useRef(1);
    useEffect(() => {
        drawMap(
            location,
            setLocation,
            type,
            mapLevel,
            mapType,
            parkLocation
        );
    }, [location, setLocation, parkLocation, type]);
    return <div id="kakaomap"></div>;
};

export default React.memo(Map);
