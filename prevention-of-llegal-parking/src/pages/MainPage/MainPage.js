import React from "react";

import LocationContainer from '../../containers/LocationContainer/LocationContainer';
import SportsCar from '../../components/Sportscar/SportsCar'

import './Mainpage.scss'

const MainPage = () => {
    return (
        <div className="main-page">
            <LocationContainer></LocationContainer>
            <SportsCar></SportsCar>
        </div>
    );
}

export default MainPage;
