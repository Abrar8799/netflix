import React from 'react';
import { Footer } from '../comp';

 export function FooterContainer(){
    return( 
    
        <Footer>
                    <Footer.Title>Question Contact Us</Footer.Title>
                    <Footer.Break/>
                    <Footer.Row>
                        <Footer.Column>
                             <Footer.Link href="#">FaQ</Footer.Link>
                            <Footer.Link href="#">Invested Relations</Footer.Link>
                            <Footer.Link href="#">ways to Watch</Footer.Link>
                            <Footer.Link href="#">Corporate Information </Footer.Link>
                            <Footer.Link href="#">Netflix Originals</Footer.Link>
                        </Footer.Column>

                        <Footer.Column>
                             <Footer.Link href="#">Help Center</Footer.Link>
                            <Footer.Link href="#">Jobs</Footer.Link>
                            <Footer.Link href="#">Term of use </Footer.Link>
                            <Footer.Link href="#">Corporate Information </Footer.Link>
                            <Footer.Link href="#">Contact Us</Footer.Link>
                        </Footer.Column> 

                        <Footer.Column>
                             <Footer.Link href="#">Account</Footer.Link>
                            <Footer.Link href="#">Redeem Gift</Footer.Link>
                            <Footer.Link href="#">Privacy</Footer.Link>
                            <Footer.Link href="#">Speed Test </Footer.Link>
                        </Footer.Column> 

                        <Footer.Column>
                             <Footer.Link href="#">Media Column</Footer.Link>
                            <Footer.Link href="#">By Gift Cards</Footer.Link>
                            <Footer.Link href="#">Cookies preferences</Footer.Link>
                            <Footer.Link href="#">Legal Notices</Footer.Link>
                                                   </Footer.Column> 

                        <Footer.Text>Netflix united Kingdom</Footer.Text>


                    </Footer.Row>
    </Footer>

    )
}

