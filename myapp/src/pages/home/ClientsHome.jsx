import React from 'react'
import styled from 'styled-components'
import indeed from '../../assets/indeed.svg'
import tebra from '../../assets/tebra.svg'
import unobrovo from '../../assets/unobrovo.svg'
import w from '../../assets/w.webp'
import eduspark from '../../assets/eduspark.webp'
import ccurex from '../../assets/ccurex.svg'
import flyingplane from '../../assets/flyingplane.webp'

export const ImageHomeContainer=styled.div`
width:100%;
padding: 5%;
// margin:0.5rem 0;
display:inline-block;

.cat{
    // position:absolute;
    // top: 92px;
    // right: 91px;
   width:100%;
   height:3rem;
   display:flex;
   align-items:center;
   justify-content:flex-start;
   @media only screen and (max-width: 680px) {
    justify-content:center;
    margin-bottom:0.5rem;
    }

   img{
    width:8rem;
    height:6rem;;
   }
   
};
.image-text{
    font-size:1.8em;
    margin-bottom:3em;

    @media only screen and (max-width: 680px) {
        font-size:1.2em;
    }
        };

.image-item{
    display:flex;
    align-items:center;
    justify-content:space-around;
    overflow:hidden;
   flex-wrap:wrap;

    img{
        width:140px;
        height:50px;
        margin:1em;

        @media only screen and (max-width: 680px) {
            width: 90px;
            height: 40px;
        }
    }
}
`

function ClientsHome() {

const images=[
    {
        id:1,
        img:eduspark
    },
    {
        id:2,
        img:tebra
    },
    {
        id:3,
        img:unobrovo
    },
    {
        id:4,
        img:w
    },
    {
        id:5,
        img:indeed
    },
    {
        id:6,
        img:ccurex
    },
]
  return (
    <ImageHomeContainer>
        <div className='cat'>
        <img  src={flyingplane}/>
        </div>
        <p className='image-text'>
        Trusted by 5+ million people at companies like
        </p>
        <div className='image-item'>
            {images && images.map((item)=>
            <img key={item?.id} src={item?.img}/>
            )}

        </div>
    </ImageHomeContainer>
  )
}

export default ClientsHome