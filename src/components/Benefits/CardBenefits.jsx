import React from 'react'
import { CardBenefit, ImgBackground } from './benefitsStyled'

const CardBenefits = ({title, text, imgBack}) => {
  return (
    <>
      <CardBenefit>
        <ImgBackground src={imgBack} alt="error" />
        <h2>{title}</h2>
        <p>{text}</p>
      </CardBenefit>
    </>
  )
}

export default CardBenefits
