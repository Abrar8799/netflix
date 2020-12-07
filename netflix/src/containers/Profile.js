import React from 'react';
import { Header } from '../comp';
import * as ROUTES from '../constant/route.js';
import logo from '../logo.svg';

function SelectProfileContainer({user,Setprofile}) {
    return (
       <Header>
       <Header.Frame>
       <Header.Logo to={ROUTES.HOME} alt="Netflix-image" src={logo}/>
       </Header.Frame>
       </Header>

       <Profile>
            <Profile.Title>Who,s watching ? </Profile.Title>
            <profile.List>
                    <Profiles.User>
                    <Profile.Picture src={user.photoURL}/>
                    </Profiles.User>
            </profile.List>
       </Profile>


    )
}

export default SelectProfileContainer
