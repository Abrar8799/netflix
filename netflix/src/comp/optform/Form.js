import React from 'react';
import { Container , Button , Input , Text ,Break } from './styleForm/Formstyle'


function Form ({ children , ...restProps}) {
    return (    <Container {...restProps}> {children} </Container>
    )
}

export default Form

Form.Button= function FormButton ({children , ...restProps}){
    return <Button {...restProps}>{children}<img src='/icons/chev.jpg' alt='Try Now'/></Button>
}

Form.Input= function FormInput ({...restProps}){
    return <Input {...restProps}/>
}


Form.Text= function FormText ({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}


Form.Break= function FormBreak ({...restProps}){
    return <Break {...restProps}></Break>
}




