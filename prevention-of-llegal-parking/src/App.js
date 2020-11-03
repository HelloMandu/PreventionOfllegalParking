import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from './pages/MainPage/MainPage'
import AuthPage from './pages/AuthPage/AuthPage'
import Logout from './logout'

import './SCSS/index.scss'

const App = () => {
  return (
    <>
      <Switch>
        <Route path={`/`} exact={true} component={MainPage}></Route>
        <Route path={`/auth`} component={AuthPage}></Route>
        {/* <Route path={`/logout`} component={Logout}></Route> */}
      </Switch>
    </>
  )
}

export default App
