


import React from 'react'
import { ContainerProvisorio } from './ShopStyled'
import ButtonCategory from './ButtonCategory'
import { useSelector } from 'react-redux'


const ShopButtonsContainer = () => {
  

  const categories = useSelector(state => state.categories.categories)

  /* console.log(categories) */

  return (
    <ContainerProvisorio>
      {
        categories.map(category => (
          <ButtonCategory key={category.id} {...category}/>
          
        ))
      }
    </ContainerProvisorio>
  )
}

export default ShopButtonsContainer
