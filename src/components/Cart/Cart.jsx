

import React from 'react'
import { CartContainer, HeaderCart } from './CartStyled'
import CardsContainer from './CardsContainer' 

const Cart = () => {
  return (
    <CartContainer>
      <HeaderCart>
        <button>eliminar</button>
        <h2>My Cart</h2>
        <button>X</button>
      </HeaderCart>

     <CardsContainer/> 
   
    
    </CartContainer>
  )
}

export default Cart
