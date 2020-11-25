import React from 'react';
import { Header } from '../comp';
import * as ROUTES  from '../constant/route';
import logo from '../logo.svg';

 export  function HeaderContainer ({children}) {
    return (
       

       <Header>
                <Header.Frame>
               <Header.Logo to={ROUTES.HOME} alt="Netflix-image" src={logo}/>
               <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
                {children}
           </Header.Frame>
       </Header>
    )
}
