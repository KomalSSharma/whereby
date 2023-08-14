import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../StyleApp'
import imgright from '../../assets/imgright.webp'
import imgleft from '../../assets/imgleft.webp'

export const GetContainer=styled.div`
width:100%;
padding:6% 0;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;
@media only screen and (max-width: 680px) {
    display:inline-block;
};

.mobile{
    @media only screen and (max-width: 680px) {
        display:none;
    }  
};

.get-item{
width:30%;

@media only screen and (max-width: 680px) {
    width:100%;
    margin:1em auto;
};
    h2{
        font-size:2.8em;
        line-height:1.5;
        margin-bottom:0.3em;
        width:100%;

        @media only screen and (max-width: 680px) {
            font-size:1.8em;
        };
    };
    img{
        width:100%;
        height:auto;
        @media only screen and (max-width: 680px) {
            width:70%;
            margin:1em auto;
        };
    };
    
}
`

function GetStarted() {
  return (
    <GetContainer>
<div className='get-item mobile'>
    <img src={imgleft}/>
</div>
<div className='get-item'>
    <h2>Get Started Today</h2>
    <StyledButton>Try for Free</StyledButton>
</div>
<div className='get-item'>
    <img src={imgright}/>
</div>
    </GetContainer>
  )
}

export default GetStarted