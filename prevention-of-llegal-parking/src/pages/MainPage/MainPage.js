import React from "react";

import SearchContainer from "../../containers/SearchContainer/SearchContainer";
import LocationContainer from "../../containers/LocationContainer/LocationContainer";

import useLocation from "../../hooks/useLocation";
import LoadingModal from '../../components/Modal/LoadingModal';

import "./MainPage.scss";
import { useCallback } from "react";
import { useState } from "react";

const MainPage = () => {
    const [location, setLocation] = useLocation();
    const [filterState, setFilterState] = useState(1);
    const filterParkLocation = useCallback((id)=>{
        setFilterState(id);
    }, [filterState]);
    return (
        <div className="main-page">
            <SearchContainer
                location={location}
                setLocation={setLocation}
                filterParkLocation={filterParkLocation}
            ></SearchContainer>
            <LocationContainer
                location={location}
                setLocation={setLocation}
                filterState={filterState}
            ></LocationContainer>
            <LoadingModal></LoadingModal>
        </div>
    );
};

export default MainPage;
