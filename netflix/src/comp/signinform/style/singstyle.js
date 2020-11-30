import styled from 'styled-components/macro';
import { Link as RouterteLink } from 'react-router-dom';

export const Container = styled.div`
        display: flex;
        flex-direction:column;
        min-height:660px;
    background-color:rgba(0,0,0,014);
    box-sizing:border-box;
    width:100%;
    margin:auto;
    max-width:450px;
    padding:60px 60px 40px;
    margin-bottom:100px;
    opacity:0.80;
`;

export const Base = styled.form `
display:flex;
flex-direction:column;
max-width:450px;
width:100%;

`;


export const Error = styled.div`
border-radius:4px;
font-size:14px;
margin:0 0 16px;
color:crimson;
padding:15px 20px;
`;

export const Title = styled.h1`
color:white;
font-size:32px;

`;

export const Text = styled.p`
color:#737373;
font-size:16px;
font-weight:500;
`;

export const TextSmall = styled.p`
margin-top:10px;
font-size:13px;
line-height:normal;
color:#8c8c8c;
`;


export const Link = styled(RouterteLink)`
color:white;
text-decoration:none;

&:hover{
    text-decoration:underline;
}
`;

export const Input = styled.input`
background:#333;
border-radius:4px;
border:0;
color:white;
height:50px;
line-height:50px;
margin-bottom:20px;

&:last-of-type{
margin-bottom:30px;
}
`;

export const Submit = styled.button`
background:#e23244;
border-radius:4px;
font-size:16px;
font-weight:bold;
margin:24px 0 12px;
padding:16px;
border:0px;
color:white;
cursor:pointer;

&:hover{
    opacity:0.5px;
}

`;