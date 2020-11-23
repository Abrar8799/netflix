import React from 'react';
import { Accordion } from '../comp'
import faqs from '../fixture/faqs.json'

export function Frequently() {

    return (
        <div>
            <Accordion>
                    <Accordion.Title>Frequently Asked Question</Accordion.Title>
                    {faqs.map((item)=>(
                        <Accordion.Item key={item.id}> 
                                <Accordion.Header>{item.header}</Accordion.Header>
                                <Accordion.Body>{item.body}</Accordion.Body>
                        </Accordion.Item>
                    ))} 
             </Accordion> 
        </div>
    )
}


