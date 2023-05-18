import React from 'react'
import { BoxInput } from './LoginStyled'

const InputRegister = ({type, label, name, isError, ...field}) => {
  return (
    <BoxInput>
      <input 
        name={name}
        type={type} 
        placeholder={label}
        error={isError}
        autoComplete="off"
        {...field}
        
        />

      {
        isError && <span>{isError}</span>
      }
    </BoxInput>
  )
}

export default InputRegister