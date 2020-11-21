import React from 'react';
import { Footer } from '../comp';

export default function FooterContainer(){
    return(
        <Footer>
                    <Footer.Title>Question && Contact Us</Footer.Title>
                    <Footer.Break/>
                    <Footer.Row>
                        <Footer.Column>
                            <Footer.Link href="#">FaQ</Footer.Link>
                            <Footer.Link href="#">Invester Relatiions</Footer.Link>
                            <Footer.Link href="#">ways to Watch</Footer.Link>
                            <Footer.Link href="#">Corprate Information </Footer.Link>
                            <Footer.Link href="#">Netflix Originals</Footer.Link>
                        </Footer.Column>
                    </Footer.Row>
       </Footer>
    )
}