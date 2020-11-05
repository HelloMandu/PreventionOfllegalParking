import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoadingModal from "./components/Modal/LoadingModal";

import MainPage from "./pages/MainPage/MainPage";

import "./SCSS/index.scss";

const App = () => {
    const isLoading = useSelector((state) => state.loading.isLoading);
    return (
        <>
            <Switch>
                <Route path={`/`} exact={true} component={MainPage}></Route>
            </Switch>
            {isLoading && <LoadingModal></LoadingModal>}
        </>
    );
};

export default App;
