import React from 'react'
import { CardsProductsContainer, NotProduct } from './CartStyled'
import Card from './Card'
import { useSelector } from 'react-redux'



const CardsContainer = () => {

  const {cartItems, success} = useSelector(state => state.cart)
 
 
  /* console.log(cartItems) */

  console.log(success)

  


  return (
    <CardsProductsContainer>

      {
        cartItems.length ? (
          cartItems.map(item =>(
            <Card key={item.id} {...item}/>
            
          ))
        )
        :<NotProduct>No hay productos</NotProduct>
        
      }

      
    </CardsProductsContainer>
  )
}

export default CardsContainer
