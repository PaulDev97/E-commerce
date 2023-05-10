
import React from 'react'
import { HeaderStyled, NavLinks, UlLinks } from './NavbarStyled'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleHidden } from '../../Redux/Cart/cartSlice'

const Navbar = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  return (
    <HeaderStyled>
      <h2 onClick={() => navigate('/')}>logo</h2>
      <nav>
        <UlLinks>
          <NavLinks to='/'>Home</NavLinks>
          <NavLinks to='/products'>Products</NavLinks>
          <NavLinks>Login</NavLinks>
          <NavLinks onClick={() => dispatch(toggleHidden())}><i className={"ph ph-shopping-cart"}></i></NavLinks>  
        </UlLinks>
      </nav>
    </HeaderStyled>
  )
}

export default Navbar
