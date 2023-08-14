import React from 'react'
import styled from 'styled-components'

export const FooterContainer=styled.div`
width:100%;
padding:6% 5%;
margin:1em auto;
display:flex;
align-items:start;
justify-content:space-between;
flex-wrap:wrap;

div{
    padding:1em;
    // border:1px solid grey;
    p{
        font-size:1.8em;
        margin:0.6em 0;
        font-weight:600;
        @media only screen and (max-width: 680px) {
            font-size:1.5em;  
        }
    };

    ul{
        list-style:none;
        font-size:16px;
        
        li{
            // margin:0.7em;
            padding:0.5em;
            font-size:1.3em;
            border-bottom:1px solid transparent;
            cursor:pointer;
            @media only screen and (max-width: 680px) {
                font-size:1.1em;  
            }

            &:hover{
                border-bottom:1px solid lightgrey;
            }
        }
    }


}


`

const footerData=[
    {
        id:1,
        title:'About',
        listOne:'About us',
        listTwo:'Careers',
        listThree:'Vision',
        listFour:'Press'
    },
    {
        id:2,
        title:'Product',
        listOne:'Embedded',
        listTwo:'Meetings',
        listThree:'Whats New',
        listFour:'Status',
        listFive:'Reference Docs'
    },
    {
        id:3,
        title:'Pricing',
        listOne:'For Embedded',
        listTwo:'For Meetings',
        
    },
    {
        id:4,
        title:'Social',
        listOne:'Blog',
        listTwo:'Twitter',
        listThree:'Instagram',
        listFour:'Facebook',
        listFive:'Linkedin'
    },
    {
        id:5,
        title:'Support',
        listOne:'Getting Started',
        listTwo:'Support Center',
        listThree:'Terms of Service',
        listFour:'Cookie Policy',
        listFive:'Cookie Seeting',
        listSix:'GDPR Settings',
        listSeven:'Security',
        listEight:'SiteMap'
    },
    {
        id:6,
        title:'Get in Touch',
        listOne:'Contact Support',
       
    },
]

function Footer() {
  return (
    <FooterContainer>
        {
            footerData && footerData.map((item)=>

            <div key={item?.id}>
        <p>{item?.title}</p>
        <ul>
            {item?.listOne && <li>{item?.listOne}</li>}
            {item?.listTwo && <li>{item?.listTwo}</li>}
            {item?.listThree && <li>{item?.listThree}</li>}
            {item?.listFour && <li>{item?.listFour}</li>}
            {item?.listFive && <li>{item?.listFive}</li>}
            {item?.listSix && <li>{item?.listSix}</li>}
            {item?.listSeven && <li>{item?.listSeven}</li>}
            {item?.listEight && <li>{item?.listEight}</li>}
        </ul>
        </div>
            )
        }
        
        
    </FooterContainer>
  )
}

export default Footer