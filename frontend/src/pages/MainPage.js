import React from "react";
import Header from "../components/Header";
import NaviList from "../components/NavList";
import SportsCar from "../components/SportsCar";
import '../SCSS/MainPage.scss'

const MainPage = () => {
    return (
        <div className="main-page">
            <Header></Header>
            <SportsCar></SportsCar>
            <NaviList></NaviList>
        </div>
    );
}

export default MainPage;
