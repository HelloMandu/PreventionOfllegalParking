import React from "react";

import SearchContainer from "../../containers/SearchContainer/SearchContainer";
import LocationContainer from "../../containers/LocationContainer/LocationContainer";

import useLocation from "../../hooks/useLocation";
import LoadingModal from '../../components/Modal/LoadingModal';

import "./MainPage.scss";

const MainPage = () => {
    const [location, setLocation] = useLocation();
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
            <LoadingModal></LoadingModal>
        </div>
    );
};

export default MainPage;
