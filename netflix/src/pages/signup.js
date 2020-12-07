import React, { useState , useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header';
import { SignForm } from '../comp';
import { ContextFirebase }  from '../context/firebaseContext';
import * as ROUTES from '../constant/route.js'


function Signup() {

  const  history   = useHistory();
  const { firebase } = useContext(ContextFirebase);

  const [firstName , setName] = useState('');
  const [emailaddress , setemailaddress] = useState('');
  const [password , setpassword] = useState('');
  const [error , seterror] = useState('');

  const isInvalid = firstName == ' ' || password == ' ' || emailaddress == '';

  const HandleSubmit =(event)=> {
      event.preventDefault();

      firebase
      .auth()
      .createUserWithEmailAndPassword(emailaddress,password)
      .then((result) => result.user.updateProfile({
          displayName:firstName,
          photoURL:Math.random(Math.random(2)*5)-1;
        }) 
        .then(()=>{
          history.push(ROUTES.BROWSER);
        })
        )

        .catch((error)=>{
          setName('');
          setemailaddress('');
          setpassword('');
            seterror(error.message);
        })

  }

  return (
        <>
        <HeaderContainer>
        <SignForm>
         
         <SignForm.Title>Sign Up</SignForm.Title>
           {!error && <SignForm.Error>{error}</SignForm.Error>}
           <SignForm.Base onSubmit = {HandleSubmit}>

           <SignForm.Input
           placeholder="Enter your Name"
           autoComplete="on"
           value={firstName} onChange={({target})=>setName(target.value)}
           />

           <SignForm.Input
           placeholder="Enter your Email"
           autoComplete="off"
           value={emailaddress} onChange={({target})=>setemailaddress(target.value)}
           />

           <SignForm.Input
           placeholder="Enter your password"
           autoComplete="off"
           value={password} onChange={({target})=>setpassword(target.value)}
           />

           <SignForm.Submit disabled={isInvalid}> Sign Up</SignForm.Submit>

           </SignForm.Base>

           <SignForm.Text>All ready Netflix Member ?
           <SignForm.Link to='/signin'>   Sign In </SignForm.Link>
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

export default Signup;