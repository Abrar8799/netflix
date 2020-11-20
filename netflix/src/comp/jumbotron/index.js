import React from 'react';

import { Container , Inner , Pane ,Title , SubTitle , Image ,Item } from './styles/jumbotron.js';
const Jumbotron = ( { children , direction = 'row' , ...restProp })=>  {
    
    return (
        <div>
            <Item {...restProp}>
            <Inner direction={direction}>
            {children}
            </Inner>
            </Item>
        </div>
    )
    }
    Jumbotron.Container = function jumbotroncontain ({ children ,...restProps}){
        return  <Container {...restProps}>{children}</Container>
    }
    Jumbotron.Pane = function jumbotronPane ({ children , ...restProps})    {
        return  <Pane {...restProps}> {children} </Pane>   
    }
    export default Jumbotron;
    Jumbotron.Title = function jumbotronTitle ({ children , ...restProps}){
        return  <Title {...restProps}>{children}</Title>   
    }

    Jumbotron.SubTitle = function jumbotronSubTitle ({ children , ...restProps}){
        return  <SubTitle {...restProps}>{children}</SubTitle>   
    }


    Jumbotron.Image = function jumbotronImage ({...restProps}){
        return <Image {...restProps} />;
    }


