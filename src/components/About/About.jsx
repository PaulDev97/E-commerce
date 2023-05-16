import React from 'react'
import { AboutContainer, BoxIconTextFont, ContainerSection, IconCheck } from './aboutStyled'

import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'

const About = () => {
  return (
    <ContainerSection>
      <AboutContainer>
        <div>
          <span>About us</span>
          <h3>Welcome To Carshop </h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit dolorem necessitatibus ducimus possimus harum.Laudantium suscipit dolorem necessitatibus ducimus possimus harum
          </p>
        </div>

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

      </AboutContainer>
    </ContainerSection>
  )
}

export default About
