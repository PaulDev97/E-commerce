

import React from 'react'
import { BoxInput } from './LoginStyled'

const Input = ({type, label, name, isError, ...field}) => {
  return (
    <BoxInput>
      <input 
        name={name}
        type={type} 
        placeholder={label}
        error={isError}
        {...field}
        
        />

      {
        isError && <span>{isError}</span>
      }
    </BoxInput>
  )
}

export default Input
