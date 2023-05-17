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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit dolorem necessitatibus ducimus possimus harum.Laudantium suscipit dolorem necessitatibus ducimus possimus harum
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
