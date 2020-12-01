import React, { useState , useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header';
import { Form, SignForm } from '../comp';
import { ContextFirebase }  from '../context/firebaseContext';
import * as ROUTES from '../constant/route.js'


function Signup() {

  const { history } = useHistory();
  const { firebase } = useContext(ContextFirebase);

  const [firstName , setName] = useState('');
  const [emailaddress , setemailaddress] = useState('');
  const [password , setpassword] = useState('');
  const [error , seterror] = useState('');

  const isInvalid = password == ' ' || emailaddress == ' ';

  const HandleSubmit =(event)=> {
      event.preventDefault();

  }

  return (
    
        <HeaderContainer>

          <Form.Title> Sign Up </Form.Title>
          {error && <SignForm.Error>{error}</SignForm.Error>}

            <SignForm.Base onSubmit = {HandleSubmit} method="POST">
                <SignForm.Input
                placeholder="First-name"
                value={firstName}
                onChange={({target})=> setName(target.value)}
                />

                <SignForm.Input
                placeholder="Enter your Email"
                value={emailaddress}
                onChange={({target})=> setemailaddress(target.value)}
                />

                <SignForm.Input
                 placeholder="Enter your password"
                 value={password}
                 autoComplete="off"
                 onChange={({target})=> setpassword(target.value)}
                />



                <SignForm.Submit disabled={isInvalid} type="submit">Sign Up</SignForm.Submit>
                    <SignForm.Text>
                        Already a users <Form.Link to="/signin">Sign In</Form.Link>
                    </SignForm.Text>
            </SignForm.Base>
          
      </HeaderContainer>

  )


}

export default Signup;