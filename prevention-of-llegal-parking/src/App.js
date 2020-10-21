import React from "react";
import { Route, Switch } from "react-router-dom";
import MapPage from "./pages/MapPage/MapPage";
import NavBar from './components/NavBar/NavBar'
import './SCSS/index.scss'

const App = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Switch>
                <Route path={[`/`, `/:type`]} exact={true} component={MapPage}></Route>
            </Switch>
        </div>
    );
}

export default App;
