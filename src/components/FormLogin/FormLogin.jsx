
import { FormContainer } from './LoginStyled'
import Input from './Input'
import { useFormik } from 'formik'
import BtnSubmit from './BtnSubmit'
import * as Yup from 'yup' 
import { useDispatch } from 'react-redux'
import { getUser } from '../../Redux/Login/loginSlice'



const passwordRegex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/


const validationSchema = Yup.object({

  name: Yup.string().trim().required('Campo requerido'),
  email: Yup.string().email('E-mail invalido').required('Campo requerido'),
  password: Yup.string().matches(passwordRegex, 'Una minuscula, mayuscula y numero')
})


const FormLogin = () => {

  
  const dispatch = useDispatch()
  const { getFieldProps, handleSubmit, errors, touched} = useFormik({

    initialValues: {
      name:"",
      email:'',
      password:'',
      isLogin: false
    },

    validationSchema,

    onSubmit: (values) => {
      dispatch(getUser(values))
      console.log(values)
    }
  })

  

  return (
    <>
      <FormContainer>
        
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

        
        
          
          <BtnSubmit 
          
            onSubmit={handleSubmit}
            
          />

        

        

      </FormContainer>
    </>
  )
}

export default FormLogin
