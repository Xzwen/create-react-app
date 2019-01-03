
import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, Redirect, browserHistory } from 'react-router'

import App from '../App'
import Login from '../pages/login'
import Home from '../pages/home'
import Main from '../pages/home/main'
import Meeting from '../pages/home/meeting'
import Device from '../pages/home/device'
import Users from '../pages/home/users'
import NoFound from '../pages/noFound/index'

const routes = (
  <Router history={browserHistory}>
    <Route path="/">
        <IndexRedirect to="login"/>
        <Route path="login" component={Login}/>
        <Route path="home" component={Home}>
          {/* <Redirect to="home/main"/> */}
          <IndexRedirect to="main"/>
          {/* <IndexRoute component={Main}/> */}
          <Route path="main" component={Main}/>
          <Route path="meeting" component={Meeting}/>
          <Route path="device" component={Device}/>
          <Route path="users" component={Users}/>
          {/* <Route path="main" component={Main}/> */}

        </Route>

    </Route>
    <Route path="/noFound" component={NoFound}/>
    <Redirect from="*" to="/noFound" />
  </Router>	
);

export default routes