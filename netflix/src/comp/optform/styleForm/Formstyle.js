import styled from 'styled-components/macro';

export const Container = styled.div`
display:flex;
/* flex-direction:row; */
justify-content:center;
align-content:space-between;
height:100%;
flex-wrap:wrap;
margin-top:20px;
@media (max-width:1000px){
flex-direction:columns;
align-items:center;
}`;



export const Button = styled.button`
display:flex;
align-items:center;
height:100%;
background:#e23255;
color:white;
text-transform:uppercase;
padding:5px 4px;
font-size:26px;
border:0px;
cursor: pointer;
&:hover{
    background:#f40612;
}

@media (max-width:1000px){
    display:flex;
    width:300px;
    height: 40px;
    font-size: 10px;
    margin-top: 0px;
}

    @media (max-width:678px){
   input{
        display:flex;
    width:200px;
    height: 40px;
    font-size: 10px;
    margin-top: 0px;
    }
    }
   
img{
    margin-left:40px;
    filter:brightness(0) invert(1);
    width:24px;
}

@media(max-width:600px) {
    width:16px;
    
    
}
`;

export const Input  = styled.input`
max-width:450px;
padding:11px;
width:100%;
height:70%;
align-content:space-between;
box-sizing:border-box;



`;

export const Text = styled.p`
font-size:19px;
text-align:center;
color:white;

@media (max-width:600px) {
    font-size:16px;
    line-height:22px;
}
`;

export const Break =styled.div`
flex-basis:100%;
height:0px;
`;












