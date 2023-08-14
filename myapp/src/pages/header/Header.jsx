import React , { useState, useEffect } from 'react'
import styled from 'styled-components'
import brand from '../../assets/brand.svg'
import { GlobalButton , StyledButton} from '../../StyleApp'
import {FaAngleDown} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {HiBars2} from 'react-icons/hi2'

export const HeaderContainer=styled.nav`
width:100%;
padding:0 5%;
display:flex;
align-items:center;
justify-content:space-between;
font-size:18px;
// border:1px solid black;
position:fixed;
background-color: ${props => props.scrollY > 10 ? 'white' : 'transparent'};
z-index:18;
transition: background-color 0.3s ease;

.header-item2{
    padding:0.5em; 
    img{
        width:9em;
        height:6em;

        @media only screen and (max-width: 680px) {
            width:6em;
            height:3em;
          };
    } 
};

.header-item{
    padding:0.5em;

    @media only screen and (max-width: 680px) {
        display:none;
      };

    // img{
    //     width:9em;
    //     height:6em;
    // }
    ul{
        list-style:none;
        display:flex;
        // font-size:22px;

        li{
            padding:1em 1.5em;
            font-size:1.2em;
            // border:1px solid grey;
            margin:0 0.7em;
            display:flex;
            align-items:center;
            justify-content:space-between;
        };
    }
};

.mobile-menu{
    @media only screen and (min-width: 681px) {
        display:none;
      }
}

`

function Header() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
        console.log(scrollY)
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <HeaderContainer scrollY={scrollY}>
        <div className='header-item2 '>
           <Link to='/'> <img src={brand} alt={'whereby'}/></Link>
        </div>
        <div className='header-item'>
            <ul>
                <li>Products <FaAngleDown/></li>
                <li>Pricing <FaAngleDown/></li>
                <li>Developers <FaAngleDown/></li>
                <li>Resources <FaAngleDown/></li>
            </ul>
        </div>
        <div className='header-item'>
            <GlobalButton>Login</GlobalButton>
            <StyledButton>Try For Free</StyledButton>
        </div>
        <div className='mobile-menu'>
<HiBars2/>
        </div>
    </HeaderContainer>
  )
}

export default Header