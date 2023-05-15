


const BtnSubmit = ({onSubmit}) => {

  
 
  
  

  const handlerSubmit = (e) => {
    e.preventDefault()
    onSubmit()
    
   
    
  }

 
 

  return (
    <>
      <button onClick={(e) => handlerSubmit(e)} type='submit'>Login</button>
    </>
  )
}

export default BtnSubmit
