import React from 'react';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import { Home , Browser , Signup , Signin } from './pages';
import * as ROUTES from './constant/route';

export default function App(){
  return (
    <>
    <div>
      <Router>
        <Switch>
        <Route exact path={ROUTES.HOME}><Home/> </Route>
        <Route exact path={ROUTES.BROWSER}> <Browser/></Route>
        <Route exact path={ROUTES.SIGN_UP}> <Signup/> </Route>
        <Route exact path={ROUTES.SIGN_IN}><Signin/></Route>
        </Switch>
      </Router>
    </div>
    </>

  )
}