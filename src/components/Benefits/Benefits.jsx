import React from 'react'
import { BenefitsCardContainer, BenefitsContainer, BoxTitlesSection, ContainerSectionBenefits } from './benefitsStyled'
import CardBenefits from './CardBenefits'
import { benefits } from '../../data/benefits'

const Benefits = () => {

  

  return (
  
    <ContainerSectionBenefits>

      <BenefitsContainer>

        <BoxTitlesSection>
          <span>See our</span>
          <h3>Benefits</h3>
         </BoxTitlesSection>
  
  
        <BenefitsCardContainer>

          {
            benefits.map(data =>(
            <CardBenefits key={data.id} {...data}/>
           ))
          }
        </BenefitsCardContainer>
      </BenefitsContainer>

    </ContainerSectionBenefits>
  )
}

export default Benefits
