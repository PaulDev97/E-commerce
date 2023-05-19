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
         <h2>Welcome  <NameUser>{ name }</NameUser></h2>
          <TextUser>Remember to keep your session logged in so you can get discounts on products.</TextUser>
        </div>

    


       <button onClick={() => dispatch(logOff())}>Log Off </button>
       
      </UserContainer>


    </UserContainerSection>

  )
}

export default User
