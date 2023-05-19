


import React from 'react'
import { FilterButtonsContainer } from './ShopStyled'
import ButtonCategory from './ButtonCategory'
import { useSelector } from 'react-redux'


const ShopButtonsContainer = () => {
  

  const categories = useSelector(state => state.categories.categories)

  /* console.log(categories) */

  return (
    <FilterButtonsContainer>
      {
        categories.map(category => (
          <ButtonCategory key={category.id} {...category}/>
          
        ))
      }
    </FilterButtonsContainer>
  )
}

export default ShopButtonsContainer
