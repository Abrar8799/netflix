import React, { useState , useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header';
import { SignForm } from '../comp';
import { ContextFirebase }  from '../context/firebaseContext';
import * as ROUTES from '../constant/route.js'

function Signin () {
        const history = useHistory();
    const {firebase} = useContext(ContextFirebase);

    const [email, setEmail] = useState();
    const [password, SetPassword] = useState();
    const [error, setError] = useState('');

        const isInvalid = password == '' || email =='';
        const HandleSubmit =(Event) => {
            Event.preventDefault();

            firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then(()=>{
          history.push(ROUTES.BROWSER);
            })
            .catch((error)=>{
                setEmail('');
                SetPassword('');
                setError(error.message);
            })

        };

    return  (
    
        <>
      
            <HeaderContainer>
             <SignForm>
              
              <SignForm.Title>Sign In</SignForm.Title>
                {!error && <SignForm.Error>{error}</SignForm.Error>}
                <SignForm.Base onSubmit = {HandleSubmit}>

                <SignForm.Input
                placeholder="Enter your Email"
                autoComplete="on"
                value={email} onChange={({target})=>setEmail(target.value)}
                />

                <SignForm.Input
                placeholder="Enter your Passoword"
                autoComplete="off"
                value={password} onChange={({target})=>SetPassword(target.value)}
                />

                <SignForm.Submit disabled={isInvalid}> Sign In</SignForm.Submit>

                </SignForm.Base>

                <SignForm.Text>New to Netflix ?
                <SignForm.Link to='/signup'>   Sign Up now </SignForm.Link>
                <SignForm.TextSmall>
                    This page Protected By Google
                </SignForm.TextSmall>
                </SignForm.Text>
                

              </SignForm>
            </HeaderContainer>

            <FooterContainer />
        </>
    )
}

export default Signin
