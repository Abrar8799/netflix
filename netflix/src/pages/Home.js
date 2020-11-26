import React from 'react';
import {Feature , Form} from '../comp'
import { HeaderContainer } from '../containers/header';
import { Frequently } from '../containers/faq'
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
    return (    
        <div>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films , Tv programmes and more
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere ,  cancel any time.
                    </Feature.SubTitle>
                </Feature>
            <Form>
                     <Form.Input placeholder="Email address"/>
                  <Form.Button>Try It Now</Form.Button>
                  <Form.Break/>
                     <Form.Text> 
                        Ready to Watch ? Enter your email to create or restart your membership
                     </Form.Text>
                     </Form>
            </HeaderContainer> 
            <JumbotronContainer/>
            <Frequently/>
            <FooterContainer/>
        </div>

    )
}

