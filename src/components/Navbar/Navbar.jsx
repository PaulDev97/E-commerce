
import React from 'react'
import { BubbleIcon, CartIcon, HeaderStyled, NavLinks, UlLinks } from './NavbarStyled'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHidden } from '../../Redux/Cart/cartSlice'

import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const navigate = useNavigate()

  const itemsCart = useSelector(state => state.cart.cartItems)

  const totalCartItems = useSelector(state=> state.cart.cartItems).reduce((acc,item) =>
    (acc += item.quantity),0
  )

  console.log(itemsCart)

  const dispatch = useDispatch()

  return (
    <HeaderStyled>
      <h2 onClick={() => navigate('/')}>logo</h2>
      <nav>
        <UlLinks>
          <NavLinks to='/'>Home</NavLinks>
          <NavLinks to='products'>Products</NavLinks>
          <NavLinks>Login</NavLinks>
          
          <CartIcon icon={faCartShopping} onClick={() => dispatch(toggleHidden())}/>
          <BubbleIcon show={totalCartItems > 0}>{totalCartItems}</BubbleIcon>
            

        
          
          
         
          
          
        </UlLinks>
      </nav>
    </HeaderStyled>
  )
}

export default Navbar
