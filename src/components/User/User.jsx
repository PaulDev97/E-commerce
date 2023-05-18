import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOff } from '../../Redux/Login/loginSlice'
import { UserContainer, UserContainerSection } from './userStyled'

const User = () => {

  const {name} = useSelector(state => state.user)
  const dispatch = useDispatch()

  /* console.log('Desde el user =>',user) */
  return (
    <UserContainerSection>

      <UserContainer>

        <div>
         <h2>Welcome { name }</h2>
        </div>

        <div>
          <p>Recordá mantener la sesion iniciada y asi podrás obtener descuentos en los productos</p>
        </div>


       <button onClick={() => dispatch(logOff())}>Cerrar sesion</button>
       
      </UserContainer>


    </UserContainerSection>

  )
}

export default User
