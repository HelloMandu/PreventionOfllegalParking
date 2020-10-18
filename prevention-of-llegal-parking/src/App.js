import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MapPage from './pages/MapPage';
import NavBar from './components/NavBar/NavBar'
import './SCSS/index.scss'

const App = () => {
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
