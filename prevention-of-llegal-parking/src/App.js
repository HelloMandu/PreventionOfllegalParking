import React from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";

import "./SCSS/index.scss";

const App = () => {
    return (
        <>
            <Switch>
                <Route
                    path={[`/`, `/:type`]}
                    exact={true}
                    component={MainPage}
                ></Route>
            </Switch>
        </>
    );
};

export default App;
