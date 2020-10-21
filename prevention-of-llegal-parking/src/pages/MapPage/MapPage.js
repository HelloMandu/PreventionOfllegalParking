import React from "react";
import useLocation from '../../hooks/useLocation';

import SearchContainer from '../../containers/SearchContainer/SearchContainer';
import LocationContainer from '../../containers/LocationContainer/LocationContainer';

import './MapPage.scss'

const MainPage = ({match}) => {
    const [location, setLocation] = useLocation();
    const {type} = match.params;
    // console.log(type);
    return (
        <div className="main-page">
            <SearchContainer></SearchContainer>
            <LocationContainer location={location} setLocation={setLocation}></LocationContainer>
        </div>
    );
}

export default MainPage;
