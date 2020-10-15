import React from "react";

import LocationContainer from '../containers/LocationContainer/LocationContainer';

import Search from '../components/Search/Search';
import SportsCar from '../components/Sportscar/SportsCar'

const MainPage = () => {
    return (
        <div>
            {/* <Search></Search> */}
            <LocationContainer></LocationContainer>
            <SportsCar></SportsCar>
        </div>
    );
}

export default MainPage;
