import React from 'react'
import { DataImgHero, DataHeroDiv, ImgHeroRigth, LineImgPoint, HeroRightContainerStyled, PointsStar, TextImgPoints } from '../Hero/HeroStyled'


const HeroRigthSide = () => {
  return (
    <HeroRightContainerStyled>
      
      <ImgHeroRigth></ImgHeroRigth>

      <DataHeroDiv>
        <DataImgHero>
          <PointsStar>
            <span>⭐ 4.9</span> 
          </PointsStar>

          <TextImgPoints>
            <p>Mercedes C-3</p>
          </TextImgPoints>

          <LineImgPoint></LineImgPoint>

        </DataImgHero>
      </DataHeroDiv>
      
      
    </HeroRightContainerStyled>
  )
}

export default HeroRigthSide
