import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoadingModal from "./components/Modal/LoadingModal";

import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import SignOut from './test/SignOut';

import './SCSS/index.scss';
import { auth } from './api/firebase';
import { console } from 'window-or-global';

const App = () => {
    const isLoading = useSelector((state) => state.loading.isLoading);
    const [currentUser, setState] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setState(user);
        });
    }, []);
    console.log(currentUser);
    return (
        <>
            <Switch>
                <Route path={`/`} exact={true} component={MainPage}></Route>
                <Route path={`/signIn`} component={AuthPage}></Route>
                <Route path={`/signOut`} component={SignOut}></Route>
            </Switch>
            {isLoading && <LoadingModal></LoadingModal>}
        </>
    );
};

export default App;
