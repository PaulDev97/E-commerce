

import React from 'react'
import { HeadingCart } from './CartStyled'
import { useDispatch } from 'react-redux'
import { clearCart, toggleHidden } from '../../Redux/Cart/cartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons'


const HeaderCart = () => {

  const dispatch = useDispatch()

  

  return (
    <HeadingCart>
      
      <FontAwesomeIcon icon={faArrowLeft}  onClick={() => dispatch(toggleHidden())} />
      <h2>My Cart</h2>
      <FontAwesomeIcon icon={faTrashCan} onClick={() => dispatch(clearCart())} />
        
    </HeadingCart>
  )
}

export default HeaderCart
