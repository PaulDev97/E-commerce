
const BtnSubmit = ({onSubmit}) => {

  

  const HandlerSubmit = (e) => {
    e.preventDefault()
    onSubmit()
    
    
  }

 
 

  return (
    <>
      <button onClick={(e) => HandlerSubmit(e)} type='submit'>Login</button>
    </>
  )
}

export default BtnSubmit
