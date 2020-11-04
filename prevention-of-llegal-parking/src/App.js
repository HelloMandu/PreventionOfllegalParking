import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import SignOut from './test/SignOut';

import './SCSS/index.scss';
import { auth } from './modules/firebase';
import { console } from 'window-or-global';

const App = () => {
    const [currentUser, setState] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setState(user);
        });
    });
    console.log(currentUser);
    return (
        <>
            <Switch>
                <Route path={`/`} exact={true} component={MainPage}></Route>
                <Route path={`/signIn`} component={AuthPage}></Route>
                <Route path={`/signOut`} component={SignOut}></Route>
            </Switch>
        </>
    );
};

export default App;
