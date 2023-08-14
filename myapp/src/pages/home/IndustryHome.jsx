import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import educat from '../../assets/educat.webp'
import evento from '../../assets/evento.webp'
import clinicdoc from '../../assets/clinicdoc.webp'

export const IndustryContainer=styled.div`
width:100%;
padding:6% 5%;
text-align:center;
font-size:16px;
h2{
    font-size:2.8em;
        line-height:1.5;
        margin-bottom:1em;
        width:40%;
        margin:1em auto;

        @media only screen and (max-width: 680px) {
            font-size:1.8em;
            width:100%;
        };
    
};

.industry-items{
    display:flex;
    width:100%;
    align-items:center;
    justify-contyent:space-between;
    flex-wrap:wrap;

    .industry-item{
        width:30%;
        overflow:hidden;
        text-align:center;
        display:inline-block;
        margin:1em;

        @media only screen and (max-width: 680px) {
            width:100%;
        };
       

        img{
            width:100%;
            height:17rem;
            overflow:hidden;
            box-shadow:rgba(0, 0, 0, 0.12) 0px 0px 12px 0px;
        };

        .title{
            margin-bottom:0.5em;
            font-size:1.4em;
        };

        .des{
            margin-bottom:0.5em;
            font-size:1.1em;
        }


    }
}
`

function IndustryHome() {

    const industryData=[
        {
            id:1,
            img:clinicdoc,
            title:'Telehealth',
            des:'Offer secure, reliable integrated video calls to connect practitioners and patients anywhere, anytime.'
        },
        {
            id:2,
            img:evento,
            title:'e-Learning',
            des:'Integrate engaging and fun virtual classroom experiences for students and teachers.'
        },
        {
            id:3,
            img:educat,
            title:'Virtual Events',
            des:'Boost engagement and attendance with customizable video conferencing for webinars and events.'
        },

    ]
  return (
    <IndustryContainer>
        <h2>Industries thriving with embedded video calls</h2>
        <div className='industry-items'>
            {industryData && industryData.map((item)=>

<div className='industry-item' key={item?.id}>
<img src={item?.img}/>
<h3 className='title'>{item?.title}</h3>
<p className='des'>{item?.des}</p>
<Link>Read More</Link>
            </div>
            )}
            
        </div>
    </IndustryContainer>
  )
}

export default IndustryHome