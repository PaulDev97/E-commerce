
import React from 'react'
import { HeaderStyled, NavLinks, UlLinks, Menu, LogoContainer } from './NavbarStyled'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Icons from './Icons'
import { hiddenMenu } from '../../Redux/Menu/menuSlice'



const Navbar = () => {


  const navigate = useNavigate()

  const dispatch = useDispatch()

  let {isLogin} = useSelector((state) => state.user)

  const { toggleMenu } = useSelector((state) => state.menu)

  return (
    <HeaderStyled>

      <LogoContainer>
        <img src="../assets/logos/logo_website.png" alt=""  onClick={() => navigate('/')}/>
      </LogoContainer>

      <Menu  showMenu={toggleMenu}>
        <UlLinks>

          <NavLinks to='/' onClick={() => dispatch(hiddenMenu())}>Home</NavLinks>

          <NavLinks to='products'  onClick={() => dispatch(hiddenMenu())}>Products</NavLinks>

          <NavLinks to={isLogin ? 'usuario':'/login'}  onClick={() => dispatch(hiddenMenu())}>
            {isLogin ? 'User':'Login'}  
          </NavLinks>
          
        </UlLinks>
      </Menu>

     
     <Icons/>
    </HeaderStyled>
  )
}

export default Navbar
