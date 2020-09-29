import React from "react";
import MainPage from "./pages/MainPage";
import './SCSS/index.scss'
import NavList from "./components/NavList";
import KakaoMap from "./components/KakaoMap";

const App = () => {
    return (
        <div>
            {/* <MainPage></MainPage> */}
            <KakaoMap></KakaoMap>
        </div>
    );
}

export default App;
