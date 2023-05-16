


import React, { useEffect } from 'react'

import Navbar from '../Navbar/Navbar'
import { ContentContainerStyled } from './LayoutStyled'
import Cart from '../Cart/Cart'
import { useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'


const Layout = ({children}) => {

  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])

  return (
    <div>
      <Navbar/>
      <Cart/>
      <ContentContainerStyled>{children}</ContentContainerStyled>
      <Footer/>
    </div>
  
    
  )
}

export default Layout
