import React from 'react'
import styled from 'styled-components'
import homep from '../../assets/homep.webp'
import mo from '../../assets/mo.webp'
import holt from '../../assets/holt.webp'
import akari from '../../assets/akari.webp'
import plane from '../../assets/plane.webp'
import { WavingImage } from '../../StyleApp'

export const TopHomeContainer=styled.div`
width:100%;
padding:0 5%;
padding-bottom:2%;
padding-top:10%;
background-color:#f8dbd5;
display:inline-block;
// position:relative;



.tophome-item{
    width:100%;
    // height:100%;
    text-align:center;
    
    img{
        width:80%;
        height:95%;;
    };

    h1{
        font-size:5rem;
        line-height:115%;
        width:50%;
        margin:2rem auto;
        margin-top:4rem;
        @media only screen and (max-width: 680px) {
            margin-top:14rem;
            font-size:2rem;
        line-height:115%;
        width:90%;
          };
        
    };

    h2{
        font-size:1.5rem;
        width:50%;
        margin:1rem auto;
        font-weight:300;
        @media only screen and (max-width: 680px) {
            // margin-top:8rem;
            font-size:1.2rem;
        line-height:115%;
        width:90%;
          };
    };

    .akari{
        width:7rem;
        height:7rem;
        position:absolute;
        top:-8%;
        left:5%;

        @media only screen and (max-width: 680px) {
            top: -168px;
            left:13%;
          };
    };

    .mo{
        width:7rem;
        height:7rem;
        position:absolute;
        bottom:0;
        right:2%;
        @media only screen and (max-width: 680px) {
            bottom:-65%;
           };
    };

    .holt{
        width:7rem;
        height:7rem;
        position:absolute;
        bottom:0;
        left:0;
        display:flex;
        align-items:center;
        justify-content:center;
        @media only screen and (max-width: 680px) {
            bottom:-91%;
            left:44px;
           };
    };

    .plane{
        width:7rem;
        height:7rem;
        position:absolute;
        top:0;
        right:0;
        display:flex;
        align-items:center;
        justify-content:center; 
        transform: rotate(-170deg);
        @media only screen and (max-width: 680px) {
            top: -167px;
            right:14px;
           };
    }
};

.tophome-position{
    position:relative;
    margin-bottom:3rem;
    @media only screen and (max-width: 680px) {
        margin-bottom:14rem;  
    };

}

`

function TopHome() {
  return (
    <TopHomeContainer>
        <div className='tophome-item tophome-position'>
    <h1>Build your dream video call solution</h1>
    <h2>Ditch corporate-looking video calls for a calm, user-friendly option, embedded directly into your platform. Optimized for Digital Mental Health, Telehealth, eLearning and more...</h2>
    <div className='mo'>
        <img src={mo} alt='whereby'/>
    </div>
    <div className='holt'>
        <img src={holt} alt='whereby'/>
        <WavingImage src={plane} alt='whereby'/>
    </div>
    <div className='akari'>
        <img src={akari} alt='whereby'/>
    </div>
    <div className='plane'>
        <WavingImage src={plane} alt='whereby'/>
    </div>
        </div>
        <div className='tophome-item' >
            <img src={homep} alt='whereby'/>
        </div>
    </TopHomeContainer>
  )
}

export default TopHome