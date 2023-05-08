


import React from 'react'
/* import Home from '../../Pages/Home/Home'
import Products from '../../Pages/Products/Products' */
import Navbar from '../Navbar/Navbar'
import { ContentContainerStyled } from './LayoutStyled'


const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <ContentContainerStyled>{children}</ContentContainerStyled>
      <h3>Footer</h3>
    </div>
  
    
  )
}

export default Layout
