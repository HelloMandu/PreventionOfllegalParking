import React from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import NavBar from "./components/NavBar/NavBar";

import "./SCSS/index.scss";

const App = () => {
    return (
        <div>
            <Switch>
                <Route
                    path={[`/`, `/:type`]}
                    exact={true}
                    component={MainPage}
                ></Route>
            </Switch>
        </div>
    );
};

export default App;
