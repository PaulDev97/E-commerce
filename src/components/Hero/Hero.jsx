import React from 'react'
import { HeroContainer } from './HeroStyled'
import HeroLeftSide from './HeroLeft'
import HeroRigthSide from './HeroRigth'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroLeftSide/>
      <HeroRigthSide/>
    </HeroContainer>
  )
}

export default Hero
