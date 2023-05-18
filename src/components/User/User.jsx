import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOff } from '../../Redux/Login/loginSlice'
import { NameUser, TextUser, UserContainer, UserContainerSection, UserIcon } from './userStyled'

const User = () => {

  const {name} = useSelector(state => state.user)
  const dispatch = useDispatch()

  /* console.log('Desde el user =>',user) */
  return (
    <UserContainerSection>

      <UserContainer>

        <UserIcon>
          <img src="../assets/logos/user_icon.png" alt="" />
        </UserIcon>

        <div>
         <h2>Bienvenido  <NameUser>{ name }</NameUser></h2>
          <TextUser>Recordá mantener la sesion iniciada y asi podrás obtener descuentos en los productos</TextUser>
        </div>

    


       <button onClick={() => dispatch(logOff())}>Cerrar sesion</button>
       
      </UserContainer>


    </UserContainerSection>

  )
}

export default User
