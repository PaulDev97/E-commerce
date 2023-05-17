import React from 'react'
import { ContainerSection, HeroContainer } from './HeroStyled'
import HeroLeftSide from './HeroLeft'
import HeroRigthSide from './HeroRigth'

const Hero = () => {
  return (
    <ContainerSection>

    <HeroContainer>
      <HeroLeftSide/>
      <HeroRigthSide/>
    </HeroContainer>

    </ContainerSection>
  )
}

export default Hero
