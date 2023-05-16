
import React from 'react'
import { BubbleIcon, CartIcon, HeaderStyled, NavLinks, UlLinks, Menu } from './NavbarStyled'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHidden } from '../../Redux/Cart/cartSlice'

import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {


  const navigate = useNavigate()

  /* const itemsCart = useSelector(state => state.cart.cartItems) */

  const totalCartItems = useSelector(state=> state.cart.cartItems).reduce((acc,item) =>
    (acc += item.quantity),0
  )

  /* console.log(itemsCart) */

  const dispatch = useDispatch()

  let {isLogin, name} = useSelector((state) => state.user)

  return (
    <HeaderStyled>
      <h2 onClick={() => navigate('/')}>logo</h2>
      <Menu>
        <UlLinks>
          <NavLinks to='/'>Home</NavLinks>
          <NavLinks to='products'>Products</NavLinks>
          <NavLinks to={isLogin ? `usuario/${name}`:'/login'}>
            {isLogin ? 'Perfil':'Login'}  
          </NavLinks>
          
          <CartIcon icon={faCartShopping} onClick={() => dispatch(toggleHidden())}/>
          <BubbleIcon show={totalCartItems > 0}>{totalCartItems}</BubbleIcon>
        
        </UlLinks>
      </Menu>
    </HeaderStyled>
  )
}

export default Navbar
