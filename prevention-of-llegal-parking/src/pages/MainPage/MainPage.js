import React from "react";
import useLocation from '../../hooks/useLocation';

import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import LocationContainer from '../../containers/LocationContainer/LocationContainer';

import './Mainpage.scss'

const MainPage = () => {
    const [location, setLocation] = useLocation();
    return (
        <div className="main-page">
            <SearchContainer></SearchContainer>
            <LocationContainer location={location} setLocation={setLocation}></LocationContainer>
        </div>
    );
}

export default MainPage;
