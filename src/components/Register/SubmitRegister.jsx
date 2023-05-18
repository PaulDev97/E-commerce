import { LinkRegister } from '../FormLogin/LoginStyled'
import { BoxBtnRegister } from './registerStyled'


const SubmitRegister = ({onSubmit}) => {
  
  const ResetForm = (e) => {
    e.preventDefault()
    
    onSubmit() 
     
    
    
  }


  return (
    <BoxBtnRegister>
       <button onClick={(e) => ResetForm(e)} type='submit'>Registrarse</button>
       <span>Or</span>
      <LinkRegister to='/login'>Login</LinkRegister>
    </BoxBtnRegister>
  )
}

export default SubmitRegister
