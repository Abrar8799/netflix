import React , { useState , useContext , createContext } from 'react';
import { Container , Inner , Title , Frame , Item , Header ,Body} from './accordionstyle.js';

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
    const [toggleShow , settoggle]=useState(false);
    return <toggleContext.Provider value={{toggleShow,settoggle}}
    ><Item {...restProps}>{children}</Item></toggleContext.Provider>
}

Accordion.Header = function AccordionHeader({children , ...restProps}){
    const {toggleShow ,settoggle} =useContext(toggleContext);
    return <Header onClick={()=>settoggle((toggleShow )=>!toggleShow)} {...restProps}>{children}</Header>
}
Accordion.Body= function AccordionBody({children ,...restProps}){
    const {toggleShow}=useContext(toggleContext);
    return toggleShow ? <Body {...restProps}>{children}</Body>:null;
}



