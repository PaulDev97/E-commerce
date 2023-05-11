import React from 'react'

import { CardDetails, ContainerDetails, ImgCarDetail, ImgDetailsContainer, InfoDetailsContainer } from './detailsStyled'
import { Link, useParams } from 'react-router-dom'
import { cars } from '../../data/cars'






const DetailsProducts = () => {

  const { products } = useParams() 
  console.log(products)

  const { name, speed, year, price, img_details, category, info} = cars.find(item => item.id === products * 1 )

  
  return (
    <>
    <ContainerDetails>

      <CardDetails>

      <ImgDetailsContainer>
        <ImgCarDetail src={img_details} alt="error" ></ImgCarDetail>
      </ImgDetailsContainer>

      <InfoDetailsContainer>
        <div>
          <Link to='/products'>Product</Link><span>/{category}</span>
        </div> 
        
        <div>

          <div>
            <h2>{name}</h2>
            <p>{info}</p>
          </div>

          <h1>{speed}</h1>
          <h1>{year}</h1>
          <h1>{price}</h1> 


        </div>
      </InfoDetailsContainer>

      </CardDetails>
      
      
    </ContainerDetails>
    
    </>
  )
}

export default DetailsProducts
