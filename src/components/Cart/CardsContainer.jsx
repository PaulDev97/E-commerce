import React from 'react'
import { CardsProductsContainer } from './CartStyled'
import Card from './Card'
import { useSelector } from 'react-redux'


const CardsContainer = () => {

  const {cartItems} = useSelector(state => state.cart)
 
  console.log(cartItems)

  return (
    <CardsProductsContainer>

      {
        cartItems.length ? (
          cartItems.map(item =>(
            <Card key={item.id} {...item}/>
            
          ))
        )
        :<p>No hay productos</p>
        
      }
    </CardsProductsContainer>
  )
}

export default CardsContainer
