

import React from 'react'
import Layout from '../components/Layout/Layout'
import {Routes as ReactDomRoutes, Route } from "react-router-dom"
import Home from '../Pages/Home/Home'
import Products from '../Pages/Products/Products'

const Routes = () => {
  return (
      <Layout>
        <ReactDomRoutes>
          <Route path='/' element={<Home/>}/>

          <Route path='products'>
            <Route index element={<Products/>} />
            
          </Route>
        </ReactDomRoutes>
      </Layout>
    
    
    
  )
}

export default Routes
