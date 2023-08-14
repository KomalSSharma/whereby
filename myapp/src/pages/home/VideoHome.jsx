import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../StyleApp'
import {Link} from 'react-router-dom'

export const VideoHomeContainer=styled.div`
width:100%;
padding:6% 5%;
display:flex;
align-items:center;
justify-content:space-between;

@media only screen and (max-width: 680px) {
    display:inline-block;
};

.video-item{
    width:50%;
    padding:0 1%;
    @media only screen and (max-width: 680px) {
       width:100%;
    };
    
    video{
        border-radius:10px;
        width:100%;
    };
};

.text-item{
    text-align:left;
    display:inline-block;
    font-size:16px;
    @media only screen and (max-width: 680px) {
        margin-top:1em; 
        text-align:center;
    };

    h2{
        font-size:2.8em;
        line-height:1.5;
        margin-bottom:1em;
        width:90%;

        @media only screen and (max-width: 680px) {
            width:100%;
            font-size:1.8em;  
        };
    };
    p{
        width:90%;
        margin-bottom:1em;
        font-size:1.3em;
        @media only screen and (max-width: 680px) {
            display:inline-block;
            width:100%;
            font-size:1em;
        };
    };

    .Link{
        font-size:1.3em;
        display:inline-block;
        margin-bottom:1em;
    }
}
`

function VideoHome() {
  return (
    <VideoHomeContainer>
        <div className='video-item'>
<video autoPlay muted loop>
   <source src={'https://framerusercontent.com/modules/assets/uaIwARGiGUghYTVon1P0UN4b9rc~7IMRbCDTHtXD0d7DUOh2swt-G2bPouTkBkBWhAj0CgY.mp4'} autoPlay  type='video/mp4'/>
   Your browser does not support the video tag.
</video>
        </div>
        <div className='video-item text-item'>
<h2>
The easiest way to add video calls into your platform
</h2>
<p>
Get started in minutes with just a few lines of code. Fully branded, customizable and seamlessly integrated into your platform using our API.
</p>
<Link className='Link' to='/discoverMore' >Discover More</Link><br/>
<StyledButton>Try For Free</StyledButton>
        </div>
    </VideoHomeContainer>
  )
}

export default VideoHome