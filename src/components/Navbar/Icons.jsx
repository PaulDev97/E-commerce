import { toggleHidden } from '../../Redux/Cart/cartSlice'
import { hiddenMenu } from '../../Redux/Menu/menuSlice'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { BarsIcon, BoxBubbleCartIcon, BubbleIcon, CartIcon } from './NavbarStyled'
import { useDispatch, useSelector } from 'react-redux'




const Icons = () => {

  const dispatch = useDispatch()

  const totalCartItems = useSelector(state=> state.cart.cartItems).reduce((acc,item) =>
  (acc += item.quantity),0
  )

  return (
    <BoxBubbleCartIcon>
      <BubbleIcon show={totalCartItems > 0}>{totalCartItems}</BubbleIcon>
      <CartIcon icon={faCartShopping} onClick={() => dispatch(toggleHidden())}/>
      <BarsIcon onClick={() => dispatch(hiddenMenu())}  icon={faBars}/>
    </BoxBubbleCartIcon>
  )
}

export default Icons
