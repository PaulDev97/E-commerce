
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children, redirectTo}) => {

  let {isLogin} = useSelector((state) => state.user)


  return isLogin ? children : <Navigate to={redirectTo}/>
}

export default ProtectedRoute
