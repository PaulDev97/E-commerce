
import React from 'react'
import { HeaderStyled, NavLinks, UlLinks } from './NavbarStyled'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()


  return (
    <HeaderStyled>
      <h2 onClick={() => navigate('/')}>logo</h2>
      <nav>
        <UlLinks>
          <NavLinks to='/'>Home</NavLinks>
          <NavLinks to='/products'>Products</NavLinks>
          <NavLinks>Login</NavLinks>
          <NavLinks><i class="ph ph-shopping-cart"></i></NavLinks>  
        </UlLinks>
      </nav>
    </HeaderStyled>
  )
}

export default Navbar
