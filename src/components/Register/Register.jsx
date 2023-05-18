
import { useFormik } from 'formik'
import * as Yup from 'yup' 

import Input from '../FormLogin/Input'
import SubmitRegister from './SubmitRegister'
import { FormContainer, FormContainerSection } from '../FormLogin/LoginStyled'




const passwordRegex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/



const validationSchema = Yup.object({

  name: Yup.string().trim().required('Campo requerido'),
  email: Yup.string().email('E-mail invalido').required('Campo requerido'),
  password: Yup.string().matches(passwordRegex,'Una mayuscula, minuscula y numero').required('Campo requerido')
})




const Register = () => {

  

  const { getFieldProps, errors, touched, handleSubmit} = useFormik({  
  
    initialValues: {
      name:"",
      email:'',
      password:'',
      
    },

    validationSchema,

    onSubmit: (values) => {
      return values
      
    }
    
  
  }
  )


  return (
    <FormContainerSection >
      <FormContainer>
        <h2>Register</h2>

        <Input
          name='name' 
          type='text' 
          label='Name'
        
          isError={touched.name && errors.name}
          {...getFieldProps('name')}
        />

        <Input 
          name='email' 
          type='email' 
          label='Email'
          
          isError={touched.email && errors.email}
          {...getFieldProps('email')}
        />

        <Input 
          name='password' 
          type='password' 
          label='Password'
          
          isError={touched.password && errors.password}
          {...getFieldProps('password')}
        />


        <SubmitRegister  onSubmit={handleSubmit}/>
       
      </FormContainer>

    </FormContainerSection>
  )
}

export default Register
