

import React from 'react'
import { CartContainer } from './CartStyled'
import CardsContainer from './CardsContainer'
import HeaderCart from './HeaderCart'
import BuyCartSection from './BuyCartSection'
import { useSelector } from 'react-redux'

const Cart = () => {

  const {hidden} = useSelector(state => state.cart)
  return (

    <div>

      { hidden &&
  
        <CartContainer>
          
          <HeaderCart/>
          <CardsContainer/> 
          <BuyCartSection/>
        </CartContainer>
  
      }
    </div>

    
  )
}

export default Cart
