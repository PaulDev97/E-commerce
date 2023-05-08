

import React from 'react'
import { HeadingCart } from './CartStyled'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../Redux/Cart/cartSlice'

const HeaderCart = () => {

  const dispatch = useDispatch()

  return (
    <HeadingCart>
       <button>eliminar</button>
        <h2>My Cart</h2>
        <i class="ph ph-trash" onClick={() => dispatch(clearCart())}></i>
        
    </HeadingCart>
  )
}

export default HeaderCart
