import React from 'react'

import { ContainerDetails, ImgCarDetail } from './detailsStyled'
import { useParams } from 'react-router-dom'
import { cars } from '../../data/cars'





const DetailsProducts = () => {

  const { products } = useParams() 
  console.log(products)

  const { name, speed, year, price, img_details} = cars.find(item => item.id === products * 1 )

  
  return (
    <>
    <ContainerDetails>
      <h1>{name}</h1>
      <h1>{speed}</h1>
      <h1>{year}</h1>
      <h1>{price}</h1> 
      <ImgCarDetail src={img_details} alt="error" ></ImgCarDetail>
      
      
    </ContainerDetails>
    
    </>
  )
}

export default DetailsProducts
