import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Path } from 'path';
import MainPage from "./pages/MainPage";
import MapPage from './pages/MapPage';
import './SCSS/index.scss'

const App = () => {
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            localStorage.setItem('latitude', position.coords.latitude);
            localStorage.setItem('longitude', position.coords.longitude);
            console.log("locationInit");
          });
    }, [])
    return (
        <div>
            <Switch>
                <Route path={`/`} exact={true} component={MainPage}></Route>
                <Route path={`/location/:url?`} component={MapPage}></Route>
            </Switch>
        </div>
    );
}

export default App;
