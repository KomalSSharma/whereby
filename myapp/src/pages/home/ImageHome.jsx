import React from 'react'
import { VideoHomeContainer } from './VideoHome'
import { Link } from 'react-router-dom'
import { StyledButton } from '../../StyleApp';
import imhhome from '../../assets/imh-home.webp'

function ImageHome() {
  return (
    <VideoHomeContainer>
  
    <div className='video-item text-item'>
<h2>

Looking for simple video meetings?
</h2>
<p>
If you want to host video calls in your browser with no downloads, check out Whereby Meetings.
</p>
<Link className='Link' to='/discoverMore' >Discover More</Link><br/>
<StyledButton>Try For Free</StyledButton>
    </div>

    <div className='video-item'>
<img src={imhhome} style={{width:'100%', height:'auto'}}/>
    </div>
</VideoHomeContainer>
  )
}

export default ImageHome