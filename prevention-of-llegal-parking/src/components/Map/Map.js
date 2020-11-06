import React, { useEffect } from "react";
import { drawMap } from "./draw";

import "./Map.scss";

const Map = ({ location, setLocation, parkLocation, type }) => {
    useEffect(() => {
        drawMap(location, setLocation, type, parkLocation);
    }, [location, setLocation, parkLocation, type]);
    return <div id="kakaomap"></div>;
};

export default React.memo(Map);
