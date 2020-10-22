import React, { useState, useEffect } from "react";
import useLocation from "../../hooks/useLocation";

import SearchContainer from "../../containers/SearchContainer/SearchContainer";
import LocationContainer from "../../containers/LocationContainer/LocationContainer";

import "./MainPage.scss";

const MainPage = ({ match }) => {
    const [location, setLocation] = useLocation();
    const { type } = match.params;
    const [pageType, setPageType] = useState("index");
    useEffect(() => {
        setPageType(type);
        console.log(type);
    }, [type]);
    return (
        <div className="main-page">
            <SearchContainer
                location={location}
                setLocation={setLocation}
            ></SearchContainer>
            <LocationContainer
                pageType={pageType}
                location={location}
                setLocation={setLocation}
            ></LocationContainer>
        </div>
    );
};

export default MainPage;
