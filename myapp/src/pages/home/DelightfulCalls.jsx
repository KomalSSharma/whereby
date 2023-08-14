import React from 'react'
import styled from 'styled-components'
import worldpeople from '../../assets/worldpeople.webp'
import enjoy from '../../assets/enjoy.webp'
import girlspeaking from '../../assets/girlspeaking.webp'
import brands from '../../assets/brands.webp'
import { StyledButton } from '../../StyleApp'
import cat from '../../assets/cat.webp'


export const DelightfulContainer=styled.div`
width:100%;
padding:6% 5%;
text-align:center;
display:inline-block;
// position:relative;

.cat{
    // position:absolute;
    // top: 92px;
    // right: 91px;
   width:100%;
   height:3rem;
   display:flex;
   align-items:center;
   justify-content:flex-end;
   @media only screen and (max-width: 680px) {
    justify-content:center;
    }

   img{
    width:5rem;
    height:auto;
   }
   
};

h2{
    font-size:2.8em;
    line-height:1.5;
    margin-bottom:1em;

    @media only screen and (max-width: 680px) {
        font-size:1.8em;
        width:100%;
    };

};
p{
   
    margin-bottom:1em;
    font-size:1.3em;

    @media only screen and (max-width: 680px) {
        font-size:1em;
        width:100%;
    };
};

.delight-items{
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
       text-align:left;
       @media only screen and (max-width: 680px) {
        text-align:center;
       }

    .delight-item{
        width:50%;
        padding:1em;
        // margin:1em;

        @media only screen and (max-width: 680px) {
          
            width:100%;
        };

        .delight-item-img{
            width:100%;
            height:18rem;
            overflow:hidden;

            img{
                width:100%;
                height:100%;
                overflow:hidden;
            }
        }
    }
}
`
const delightData=[
    {
        id:1,
        src:worldpeople,
        title:'Friendly & helpful team',
        des:'We want to help you grow! We offer resources to ensure you get started quickly, build successfully and in turn support your users.'
    },
    {
        id:2,
        src:enjoy,
        title:'Security and privacy focused',
        des:'All content is encrypted, we are GDPR and ISO27001 certified and can be implemented with HIPAA compliance.'
    },
    {
        id:3,
        src:girlspeaking,
        title:'User-friendly',
        des:'Provide a calm, easy-to-use experience packed with features and fully customizable to fit your brand and needs.'
    },
    {
        id:4,
        src:brands,
        title:'Superior Reliability',
        des:'Our infrastructure is scalable to support you as you grow with a consistently high quality video call experience.'
    },
]
function DelightfulCalls() {
  return (
    <DelightfulContainer>
        <div className='cat'>
        <img  src={cat}/>
        </div>
        <h2>Delightful video calls</h2>
        <p>Increase customer trust and confidence by embedding secure video calls inside your service.</p>
        <div className='delight-items'>
            {delightData && delightData.map((item)=>
            <div className='delight-item' key={item?.id}>
                <div className='delight-item-img'>
                    <img src={item?.src} alt={item?.title}/>
                </div>
                <div className='delight-item-text'>
                    <h3>{item?.title}</h3>
                    <p>{item?.des}</p>
                </div>
            </div>
            )}

        </div>
        <StyledButton>Try for Free</StyledButton>
    </DelightfulContainer>
  )
}

export default DelightfulCalls