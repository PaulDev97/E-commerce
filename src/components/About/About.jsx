import React from 'react'
import { AboutContainer, BoxIconTextFont, BoxSignature, BoxTitleAbout, ContainerSection, DividingLine, IconCheck, PresidentNameBox, SealContainer, SignatureImg, TextAbout } from './aboutStyled'

import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'

const About = () => {
  return (
    <ContainerSection>
      <AboutContainer>
        <BoxTitleAbout>
          <span>About us</span>
          <h3>Welcome To Carshop </h3>
        </BoxTitleAbout>

        <TextAbout>
          <p>
          This company was born with the objective of being able to work with legendary brands as far as cars are concerned. In CarShop you will find a lot of variety and high quality. Giving that characteristic seal that keeps us among the best in the world. 
          </p>
        </TextAbout>

        <div>

          <BoxIconTextFont>
            <IconCheck icon={faCheckSquare} />
            <p>Have a larger stock of vehicles</p>
          </BoxIconTextFont>  
          
          <BoxIconTextFont>
            <IconCheck icon={faCheckSquare} />
            <p>We are at worldwide locations</p>
          </BoxIconTextFont>  

          <BoxIconTextFont>
            <IconCheck icon={faCheckSquare} />
            <p>We deal in have all brands</p>
          </BoxIconTextFont>  

          <BoxIconTextFont>
            <IconCheck icon={faCheckSquare} />
            <p>We are a trusted name</p>
          </BoxIconTextFont>  

        </div>

        <SealContainer>

          <BoxSignature>
            <SignatureImg src='../assets/cars/signature.png'/>
          </BoxSignature>

          <DividingLine>
            
          </DividingLine>

          <PresidentNameBox>
            <h3>Paul Cartolin</h3>
            <span>President</span>
          </PresidentNameBox>

        </SealContainer>

      </AboutContainer>
    </ContainerSection>
  )
}

export default About
