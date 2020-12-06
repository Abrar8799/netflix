import React from 'react';
import {   Route , Redirect } from 'react-router-dom';

function Islogged({user , Isloggeded , children , ...rest}) {
   
    return <Route {...rest}
                render={()=>{
                    if(!user){
                    return  children;
                     }
                    if(user){ 
                        return (<Redirect to={{pathname:Isloggeded}}/>);
                }          
                }}
                />          
}

  function ProtectRoute({  user , children , ...rest}) {
     return <Route {...rest}
                        render={({location})=> {
                              if(user){
                                 return children;
                                }
                              if(!user) {
                                return  (<Redirect to={{ pathname:'signin', 
                                                        state : {from :location}}}/>);
                                          }
                               return null;
                        }}
                    />
 }

export  {Islogged , ProtectRoute};
