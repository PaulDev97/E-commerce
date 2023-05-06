

import React from 'react'
import { useSelector } from 'react-redux'

const BuyCartSection = () => {
  const {cartItems} = useSelector(state => state.cart)

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  },0)

  const totalCartItems = useSelector(state=> state.cart.cartItems).reduce((acc,item) =>
    (acc += item.quantity),0
  )

  return (
    <div>
      <span>Productos: {totalCartItems}</span>
      <span>Precio total: {totalPrice}</span>
    </div>
  )
}

export default BuyCartSection
