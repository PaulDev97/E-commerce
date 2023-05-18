import { BoxButn, LinkRegister } from "./LoginStyled"

const BtnSubmit = ({onSubmit}) => {

  

  const HandlerSubmit = (e) => {
    e.preventDefault()
    onSubmit()
    
    
  }

 
 

  return (
    <BoxButn>
      <button onClick={(e) => HandlerSubmit(e)} type='submit'>Login</button>

      <span>Or</span>

      <LinkRegister  to='/registro'>Register</LinkRegister>
    </BoxButn>
  )
}

export default BtnSubmit
