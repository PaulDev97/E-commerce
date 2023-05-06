

import React from 'react'
import { CartContainer } from './CartStyled'
import CardsContainer from './CardsContainer'
import HeaderCart from './HeaderCart'
import BuyCartSection from './BuyCartSection'

const Cart = () => {
  return (
    <CartContainer>
      
      <HeaderCart/>
      <CardsContainer/> 
      <BuyCartSection/>
    </CartContainer>
  )
}

export default Cart
