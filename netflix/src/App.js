import React from 'react';
import { BrowserRouter as Router ,Switch } from 'react-router-dom';
import { Home , Browser , Signup , Signin } from './pages';
import * as ROUTES from './constant/route';
import { Islogged , ProtectRoute} from  './helper/Routes.js'

export default function App(){
  const user=null;
  return (
    <>
    <div>
      <Router>
      <Switch>
              <Islogged user={user} Isloggeded={ROUTES.BROWSER} path={ROUTES.SIGN_IN}><Signin/></Islogged>
              <Islogged user={user} Isloggeded={ROUTES.BROWSER} path={ROUTES.SIGN_UP}><Signup/></Islogged>
              <ProtectRoute user={user} path={ROUTES.BROWSER} exact><Browser/></ProtectRoute>
              <Islogged user={user} Isloggeded={ROUTES.BROWSER}  path={ROUTES.HOME} exact><Home/></Islogged>
              </Switch>           
      </Router> 
    </div>
    </>

  )
}