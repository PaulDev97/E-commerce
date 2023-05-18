

import React from 'react'
import Layout from '../components/Layout/Layout'
import {Routes as ReactDomRoutes, Route } from "react-router-dom"
import Home from '../Pages/Home/Home'
import Products from '../Pages/Products/Products'
import DetailsCard from '../components/Details_Product/DetailsProducts'

import { useSelector } from 'react-redux'
import LoginUser from '../Pages/Login/LoginUser'
import User from '../components/User/User'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const Routes = () => {

  let {isLogin} = useSelector((state) => state.user)

  return (
      <Layout>
        <ReactDomRoutes>
          <Route path='/' element={<Home/>}/>

          <Route path='products'>
            <Route index element={<Products/>} />
            <Route path=':products' element={<DetailsCard/>} />
          </Route>

          {!isLogin &&  <Route path='/login' element={<LoginUser />}/> }

        
              
         <Route path='usuario'
              element={
                <ProtectedRoute redirectTo={'/login'}>
                  <User/>
                </ProtectedRoute>
              }
            /> 

          
          
        </ReactDomRoutes>
      </Layout>
    
    
    
  )
}

export default Routes
