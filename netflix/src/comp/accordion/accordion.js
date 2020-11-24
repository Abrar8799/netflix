import React , { useState , useContext , createContext } from 'react';
import {Container , Inner ,Title , Frame , Item , Header ,Body} from './style/Accostyle.js';

const toggleContext=createContext();




function Accordion ({children , ...restProps }) {
    return (
         <Container {...restProps}>
             <Inner>{children}</Inner>
         </Container>
    )
}

export default Accordion;

Accordion.Title = function AccordionTitle({children , ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({children , ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({children , ...restProps}){
    const [toggleShow , ontoggle]= useState(false);
    return <toggleContext.Provider value={{toggleShow ,ontoggle}}>
        <Item {...restProps}>{children}</Item></toggleContext.Provider>
}

Accordion.Header = function AccordionHeader({children , ...restProps}){
    const {toggleShow , ontoggle} = useContext (toggleContext);
    return <Header 
            onClick={()=> ontoggle(( toggleShow ) => ! toggleShow)} {...restProps}>
           {children} 
           <pre>{JSON.stringify(ontoggle ,null ,2)} </pre>
          
           {
               toggleShow ? (<img src='/icons/close-slim1.jpg' alt='add'/>)
                     :
               (<img src='/icons/add1.jpg' alt='close-slim'/>)
           }
           </Header>
}
Accordion.Body= function AccordionBody({children ,...restProps}){
    const {toggleShow}=useContext(toggleContext);  
    return toggleShow ? <Body {...restProps}>{children}</Body>:null;
}


