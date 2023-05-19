

import React from 'react'
import { HeadingCart, IconsHeaderCart } from './CartStyled'
import { useDispatch } from 'react-redux'
import { clearCart, toggleHidden } from '../../Redux/Cart/cartSlice'

import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons'


const HeaderCart = () => {

  const dispatch = useDispatch()

  

  return (
    <HeadingCart>
      
      <IconsHeaderCart icon={faArrowLeft}  onClick={() => dispatch(toggleHidden())} />
      <h2>My Cart</h2>
      <IconsHeaderCart icon={faTrashCan} onClick={() => dispatch(clearCart())} />
        
    </HeadingCart>
  )
}

export default HeaderCart
