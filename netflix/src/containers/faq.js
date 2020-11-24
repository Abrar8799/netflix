import React from 'react';
import { Accordion } from '../comp';
import faqs from '../fixture/faqs'
import { Form } from "../comp";

export function Frequently() {

    return (
        <div>
        
            <Accordion>
                    <Accordion.Title>Frequently Asked Question</Accordion.Title>
                    <Accordion.Item>
                        {faqs.map((item)=>(
                    <Accordion.Item key={item.id}> 
                                <Accordion.Header>{item.header}</Accordion.Header>
                                <Accordion.Body>{item.body}</Accordion.Body>
                                </Accordion.Item>
                                  ))}
                                <Form>
                     <Form.Input placeholder="Email address"/>
                  <Form.Button>Try It Now</Form.Button>
                  <Form.Break/>
                     <Form.Text> 
                        Ready to Watch ? Enter your email to create or restart your membership
                     </Form.Text>
                     </Form>
                    </Accordion.Item>
             </Accordion> 
        </div>
    );
}


