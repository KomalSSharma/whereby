import React from 'react'
import styled from 'styled-components'
import TopHome from './TopHome'
import VideoHome from './VideoHome'
import ClientsHome from './ClientsHome'
import ImageHome from './ImageHome'
import IndustryHome from './IndustryHome'
import GetStarted from './GetStarted'
import TestimonialsHome from './TestimonialsHome'
import DelightfulCalls from './DelightfulCalls'

export const HomeContainer=styled.main`

`

function Home() {
  return (
    <HomeContainer>
<TopHome/>
<VideoHome/>
<ClientsHome/>
<IndustryHome/>
<ImageHome/>
<DelightfulCalls/>
<TestimonialsHome/>
<GetStarted/>
    </HomeContainer>
  )
}

export default Home