import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components';


const Login = (props) => {
    return (
        <div>
            <Container>

            
            <Content>
                
            <CTA> 
                <CTAlogoOne src="/images/cta-logo-one.svg"  />
                <Signup>GET ALL THREE</Signup>
                <Description> Get Premeier acess  to Toy story 4  and other latest Shows/Movies ,for an additional fee with a Disney+  subscription at ₹999/- per year</Description>
                <CTAlogoTwo src ="/images/cta-logo-two.png"></CTAlogoTwo>
            </CTA>
                
                 <Bgimg/> </Content>
         
            </Container>
        </div>
    )
}

const Container = styled.section`  
overflow: hidden;  
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;
const Content = styled.div` 
//  margin-bottom: 10vw;
 width: 100%;
 position: relative;
 min-height: 100vh;
 box-sizing: border-box;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 80px  40px;
 height: 100%;

`;

const Bgimg = styled.div`
height:100%;
backgound-position:top;
background-size:cover;
background-repeat: no-repeat;
background-image : url("/images/netflix.jpg");
opacity:0.45;
position:absolute;
top:0;
left:0;
right:0;

z-index : -1;


`;

const CTA = styled.div`

max-width:650px;
width:100%;
display:flex;
flex-direction:column;





`;
const CTAlogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display :block;
width:100%;




`;
const Signup = styled.a`
font-weight : bold;
color:#f9f9f9;
background-color :#0063e5;
margin-bottom:12px;
letter-spacing :1.5px;
width:100%;
font-size : 18.5px;
border: 1px solid transparent;
padding : 16.5px 0;
border-radius : 4px;
&:hover{
    background-color :#0483ee; 
}


`;
const Description = styled.p`
color = hlsa(0,0%,95.3%,1);
font-size:11px;
margin : 0 0 24px;
line-height :1.5em;
letter-spacing :1.5px;



`;
const CTAlogoTwo = styled.img`
max-width :600px;
margin-bottom : 20px;
display:inline-bottom;
width:100%;

`
;





export default Login
