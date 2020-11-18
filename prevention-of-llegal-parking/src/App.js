import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import LoadingModal from "./components/Modal/LoadingModal";

import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import SignOut from './test/SignOut';

import './index.scss';
import SportsCar from "./components/Sportscar/SportsCar";

const App = () => {
    const isLoading = useSelector((state) => state.loading.isLoading);
    return (
        <>
            <Switch>
                <Route path={`/`} exact={true} component={MainPage}></Route>
                <Route path={`/signIn`} component={AuthPage}></Route>
                <Route path={`/signOut`} component={SignOut}></Route>
            </Switch>
            {isLoading && <LoadingModal></LoadingModal>}
            <SportsCar />
        </>
    );
};

export default App;
