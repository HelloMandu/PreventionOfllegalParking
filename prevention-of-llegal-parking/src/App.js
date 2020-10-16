import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "./modules/location";
import MainPage from "./pages/MainPage/MainPage";
import MapPage from './pages/MapPage';
import NavBar from './components/NavBar/NavBar'
import './SCSS/index.scss'

const App = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <NavBar></NavBar>
            <Switch>
                <Route path={`/`} exact={true} component={MainPage}></Route>
                <Route path={`/location/:url?`} component={MapPage}></Route>
            </Switch>
        </div>
    );
}

export default App;
