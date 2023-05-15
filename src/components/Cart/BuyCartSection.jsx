

import React from 'react'
import { useSelector } from 'react-redux'
import { BoxBuyCart } from './CartStyled'

const BuyCartSection = () => {
  const {cartItems} = useSelector(state => state.cart)

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  },0)

  

  return (
    <BoxBuyCart>
      <span>Total: ${totalPrice}</span>
      <button>Comprar</button>
    </BoxBuyCart>
  )
}

export default BuyCartSection
