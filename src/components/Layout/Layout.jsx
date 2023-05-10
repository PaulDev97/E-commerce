


import React from 'react'

import Navbar from '../Navbar/Navbar'
import { ContentContainerStyled } from './LayoutStyled'
import Cart from '../Cart/Cart'


const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <Cart/>
      <ContentContainerStyled>{children}</ContentContainerStyled>
      <h3>Footer</h3>
    </div>
  
    
  )
}

export default Layout
