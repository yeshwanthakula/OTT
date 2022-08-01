import { useEffect } from "react";
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom';

import { selectUserPhoto , selectUserEmail ,selectUserName, setUserLoginDetails,setSignOutState } from '../features/users/Userslice'


const Header = (props) => {


const dispatch = useDispatch();
const navigate = useNavigate();
const username = useSelector(selectUserName);
const useremail = useSelector(selectUserEmail);
const userPhoto = useSelector(selectUserPhoto);

useEffect(() => {

  // it is used to speculate the chamges in authentucation//
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      setUser(user);
      navigate('/home');
    }
  });
}, [username]);




const handleauth= ()=>{
if(!username){
auth.signInWithPopup(provider).then((result) =>{
  setUser(result.user);





}).catch((error)=>{

  alert(error.message);
});}

else if(username){
auth.signOut().then(() =>{
dispatch(setSignOutState());
navigate('/')


}).catch((error)=>{alert(error.message)});

}


}

const setUser =(user)=>{

dispatch(setUserLoginDetails({

  name: user.displayName,
  email: user.email,
  photo: user.photoURL,





}))



}

    return (
        <Nav>
            <Logo> < img src = "images/logo.svg" alt ="disney+"/></Logo>


            {!username ?  <Logine onClick={handleauth}>LOGIN</Logine> : <>
            <Navmenu> 
                <a href="/home">  
                  <img src ="/images/home-icon.svg" alt ="home"/>
                  <span>HOME</span>
                
                  </a>
                  <a href="/search">  
                  <img src ="/images/search-icon.svg" alt ="home"/>
                  <span>SEARCH</span>
                
                  </a>
                  <a href="/series">  
                  <img src ="/images/series-icon.svg" alt ="home"/>
                  <span>SERIES</span>
                
                  </a>
                  <a href="/original">  
                  <img src ="/images/original-icon.svg" alt ="home"/>
                  <span>ORIGINAL</span>
                
                  </a>
                  <a href="/watchlist">  
                  <img src ="/images/watchlist-icon.svg" alt ="home"/>
                  <span>WATCHLIST</span>
                
                  </a>
                  <a href="/movie">  
                  <img src ="/images/movie-icon.svg" alt ="home"/>
                  <span>MOVIES</span>
                
                  </a>

                  
             
                
                </Navmenu>
                <Signout>
                  
                <Userimg   src ={userPhoto}  alt={username}  />

                <Dropdown >

                 <span onClick = {handleauth}>Sign Out</span>

                </Dropdown>


                </Signout>
                  
                </>
                }
               
        </Nav>
    )
}

const Logine = styled.a`
 background-color:rgba(0,0,0.0.6);
 letter-spacing:1.5px;
 padding : 8px 16px;
 border:1px solid #f9f9f9;
 border-radius:4px;
 transition: all .2s ease 0s;

 &:hover{
   background-color:#f9f9f9;
   color:#000;
   border-color:transparent;
 }




`;
const Nav = styled.nav`
position:fixed;
top:0;
bottom:0;
right:0;
left:0;
height:70px;
display:flex;
justify-content : space-between;
align-items : center;
background-color:#090b13;
padding : 0 36px;
z-index:3;


`;
const Logo = styled.a`
padding:0;
width:80px;
max-height:70px;
margin-top:4px;
display:inline-block;
font-size = 0;
img{
  width:100%;
  display = inline-block;

}



`;
const Navmenu = styled.div`
display :flex;
align-items:center;
flex-flow:row nowrap;
justify-content:flex-end;
margin:0px;
padding:0px;

position: relative;
margin-right:auto;
margin-left:25px;

a{
 display:flex;
 align-items:center;
 padding: 0 12px;


  img{
      height:20px;
      min-width:20px;
      width:20px;
  }
  span{
      color:rgb(249,249,249);
      font-size:13px;
      line-height:1.08;
      letter-spacing:1.42px;
      padding  2px 0px;
      white-space:nowrap;
      position:relative;
  
  &:before{
    background-color:rgb(249,249,249);
    border-radius:0px 0px 4px 4px;
    bottom:-6px;
    content ="";
    height:2px;
    left:0px;
   
    opacity:0;
    
   right:0px;  
    transform-orign: left center;
    position:absolute;
    transform:scaleX(0);
    
    transistion: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    visibility:hidden;
    width:auto;
  }


  &:hover{


    span:before{
    transform:scaleX(1);
    visibility:visible;
    opacity:1 !important;
    
    
    }
  }
}










// @media (max-width:768px){
//     display:none;


// }



`;

const Userimg = styled.img`
height:100%;


`;
const Dropdown = styled.div`
position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 5px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity:0;
 





`;

const Signout = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${Userimg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;


export default Header;
