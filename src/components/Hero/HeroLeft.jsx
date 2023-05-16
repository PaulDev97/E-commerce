import React from 'react'
import { BoxStatsHero, ContainerBoxStats, HeadingHero, LineDivideStats, HeroLeftContainerStyled, NumbersHero, ShopButton, SubtitleHero, TextBoxStats, TittleHero, TittleHero2 } from './HeroStyled'



const HeroLeftSide = () => {
  return (
    <HeroLeftContainerStyled>

      <HeadingHero>Drive the car of your dreams</HeadingHero>

      <div>
        <TittleHero>The best range of  
          <br/>
          <TittleHero2>vehicles, choose </TittleHero2>
          <br />
          <TittleHero2>yours</TittleHero2>

        </TittleHero>
      </div>

      <SubtitleHero>Find several cars that suits you very easly, forget alll dificulties and hasle in finding the best car for yourself.</SubtitleHero>

      <ShopButton to='products'>Store</ShopButton>

      <BoxStatsHero>
        <ContainerBoxStats>
          <NumbersHero>2K <span>+</span></NumbersHero>
          <TextBoxStats>Premium Cars</TextBoxStats>
        </ContainerBoxStats>

        <LineDivideStats>-</LineDivideStats>

        <ContainerBoxStats>
          <NumbersHero>36K <span>+</span></NumbersHero>
          <TextBoxStats>Happy Customers</TextBoxStats>
        </ContainerBoxStats>
        
      </BoxStatsHero>

    
    </HeroLeftContainerStyled>
  )
}

export default HeroLeftSide
