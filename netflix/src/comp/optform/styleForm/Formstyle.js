import styled from 'styled-components/macro';

export const Container = styled.div`
display:flex;
/* flex-direction:row; */
justify-content:center;
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
padding:0 42px;
font-size:26px;
border:0px;
cursor: pointer;
&:hover{
    background:#f40612;
}

@media (max-width:1000px){
    width:300px;
    height: 40px;
    font-size: 10px;
    margin-top: 0px;
    /* width:150px;
    height:40px;
    font-size:16px;
    margin-top:20px;
    font-weight:bold; */
    /* img{
    margin-left:10px;
    filter:brightness(0) invert(1);
    width:24px; */
}

}

img{
    margin-left:10px;
    filter:brightness(0) invert(1);
    width:24px;
}



@media(max-width:1000px) {
    width:16px;
}
`;

export const Input  = styled.input`
max-width:450px;
padding:12px;
width:100%;
height:70%;
box-sizing:border-box;
/* margin-left:-115px; */
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












