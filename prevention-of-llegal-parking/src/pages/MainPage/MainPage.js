import React from "react";
import SearchContainer from "../../containers/SearchContainer/SearchContainer";
import LocationContainer from "../../containers/LocationContainer/LocationContainer";
import ParkLocListContainer from '../../containers/ParkLocListContainer/ParkLocListContainer'

import Category from "../../components/Category/Category";
import MyLocation from '../../components/MyLocation/MyLocation';

import useLocation from "../../hooks/useLocation";
import useToggle from '../../hooks/useToggle';


import "./MainPage.scss";

const MainPage = () => {
    const [location, setLocation] = useLocation();
    const [parkLocListToggle, type, handleParkLocListToggle] = useToggle();

    return (
        <div className="main-page">
            <SearchContainer
                location={location}
                setLocation={setLocation}
            ></SearchContainer>
            <LocationContainer
                location={location}
                setLocation={setLocation}
            ></LocationContainer>
            <Category handleParkLocListToggle={handleParkLocListToggle}></Category>
            <MyLocation></MyLocation>
            <ParkLocListContainer
            parkLocListToggle={parkLocListToggle}
            handleParkLocListToggle={handleParkLocListToggle}
            type={type}
            ></ParkLocListContainer>
        </div>
    );
};

export default MainPage
