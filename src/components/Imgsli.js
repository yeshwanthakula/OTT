import React from 'react'
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// ... operator  is uded when more arguments are required to use//
// Slider is used to create a carosel//

const Imgsli = () => {

let settings ={
    // for carousel  arguments//
dots:true,
speed:500,
infinite:true,
SlidesToShow:1,
SlidesToScroll :1,
autoplay:true



};

    return (


        <div>
          <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/aa.png" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>

           
        </div>
    )
}

const Carousel = styled(Slider)`
margin-top:20px;

// below code is to make opaque the slider buttons(->) and when hover it shoulsd appear//
& > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button{
 &:before{
 font-size:10px;
 color:rgb(150,158,171);


 }


  }
  li.slick-active button:before{

    color:white;
  }
  // with this the slider will also show what is coming next//
  .slick-list {
    overflow: initial;
  }

  // this is to adjust the slider buttons position//
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }


  
  



`;


const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  
  // online-code for box-shadow generator//
  a{
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;


  }


  img{
    height:100%;
    width:100%;

    &:hover{
   padding:0;
   border-radius:4px;
   border:4px solid rgba(294,294,294,0.8);
   transition-duration:300ms

    }
  }

  
  
  `;

export default Imgsli
