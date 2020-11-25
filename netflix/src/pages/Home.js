import React from 'react';
import { HeaderContainer } from '../containers/header';
import { Frequently } from '../containers/faq'
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
    return (    
        <div>
            <HeaderContainer>
            <JumbotronContainer/>
            <Frequently/>
            <FooterContainer/>
            </HeaderContainer> 
        </div>

    )
}

