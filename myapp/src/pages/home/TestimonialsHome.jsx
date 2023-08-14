import React from 'react'
import styled from 'styled-components'
import bg from '../../assets/bg.webp'
import andrew from '../../assets/andrew.webp'
import paul from '../../assets/paul.webp'
import donni from '../../assets/donni.webp'
import plane from '../../assets/plane.webp'
import monk from '../../assets/monk.webp'
import smoke from '../../assets/smoke.webp'
import eduspark from '../../assets/eduspark.webp'
import ccurex from '../../assets/ccurex.svg'
import w from '../../assets/w.webp'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { WavingImage } from '../../StyleApp'

export const TestimonialConatiner=styled.div`
width:100%;
padding:6% 5%;
// display:flex;
// align-items:center;
// justify;

.slick-dots {
    padding:0.2em;
  };

.test-item{
    width:90%;
    min-height:30em;
    display:inline-block;
    background-image: url(${bg});
background-size: cover;
background-position: center;
// border:1px solid grey;
 margin:0 auto;  
 position:relative;
 background-color:#F8DBD5;
 padding:7% 0;
 border-radius:1em;

 
};

.plane{
    position:absolute;
    top:0;
    left:1%;
};

.smoke{
    position:absolute;
    top:0;
    right:1%;
};

.monk{
    position:absolute;
    bottom:0;
    right:1%;

    img{
        width:10rem;
        height:auto;
        @media only screen and (max-width: 680px) {
            width:6rem;
        }
    }
};

.test-image{
   width:100%;
    height:5rem;
     margin:1em auto;
     @media only screen and (max-width: 680px) {
       width:100%;
       height:5rem;
        margin:4em auto;
        margin-bottom:1em;
     };

     img{
        width:5rem;
        height:3rem;
        margin:0 auto;
     };
};

.test-title{
    width:70%;
    margin:1.5% auto;
    @media only screen and (max-width: 680px) {
        text-align:center;
        width:100%;
        margin:1% auto;
     };

    h2{
        font-size:2.8em;

        @media only screen and (max-width: 680px) {
           font-size:1.5em;
           width:98%;
           margin:0 auto;
        };
    };
};

.test-client{
    display:flex;
    align-items:center;
    justify-content:center;
    width:40%;
    margin:0 auto;
    @media only screen and (max-width: 680px) {
        width:48%;
    };

    .test-client-item{
        margin:0.5em;
        p{
            
            @media only screen and (max-width: 680px) {
                font-size:0.7em;
            }
        }
    }
}


`

function TestimonialsHome() {

    const testData=[
        {
            id:1,
            logo:eduspark,
            title:'"Within two hours, our developer was able to implement more than he had in the eight months prior with Agora."',
            img:andrew,
            name:'Andrew Morat',
            desig:'CEO Co-Founder'
        },
        {
            id:2,
            logo:w,
            title:'"With Whereby, neither physicians nor their patients need to download an app or remember a specific login, they can jump right into a video call — saving admin time from eating into clinic appointments."',
            img:paul,
            name:'Paul Gonzalez',
            desig:'CEO Co-Founder'
        },
        {
            id:3,
            logo:ccurex,
            title:'“Whereby’s tools have been a game changer for us. We can create HIPAA-compliant video rooms for every single session. It’s perfectly compliant with every rule and regulation.”',
            img:donni,
            name:'Donni Belfon',
            desig:'CEO Co-Founder'
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <TestimonialConatiner>
         <Slider {...settings}>
         {testData && testData.map((item)=>
         <div className='test-item' key={item?.id}>

<div className='plane'>
  
     <WavingImage src={plane}/>
</div>
<div className='smoke'>
    <img src={smoke}/>
</div>
<div className='monk'>
    <img src={monk}/>
</div>


<div className='test-image'>
    <img src={item?.logo} />
</div>
<div className='test-title'>
    <h2>{item?.title}</h2>
</div>
<div className='test-client'>
    <div className='test-client-item' >
        <img src={item?.img} style={{width:'3rem' , height:'3rem', borderRadius:'7px'}}/>
    </div>
    <div className='test-client-item'>
        <p>{item?.name}</p>
        <p>{item?.desig}</p>
    </div>
</div>
{/* </React.Fragment> */}




</div>
)}
         </Slider>

        

    </TestimonialConatiner>
  )
}

export default TestimonialsHome