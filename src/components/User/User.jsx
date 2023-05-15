import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOff } from '../../Redux/Login/loginSlice'

const User = () => {

  const usuario = useSelector(state => state.user)
  const dispatch = useDispatch()

  /* console.log('Desde el user =>',user) */
  return (
    <div>
      {/* hola { usuario.name } */}



      <button onClick={() => dispatch(logOff(usuario))}>Cerrar sesion</button>
    </div>

  )
}

export default User
