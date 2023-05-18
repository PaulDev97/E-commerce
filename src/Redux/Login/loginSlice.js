import { createSlice } from "@reduxjs/toolkit"




const initialState ={
  name:'',
  email:'',
  password:'',
  isLogin: false
}


export const userSlice = createSlice({
  name:'user',
  initialState,

  reducers:{
    getUser: (state,dispatch) => {
      console.log('state =>',dispatch.payload)
      return {
        ...state,
        name: dispatch.payload.name,
        isLogin:true
      }
    },
    logOff: (state) => {
      return {
        ...state,
        name:'',
        isLogin: false
      }
    }
  }
})


export const {getUser , logOff} = userSlice.actions

export default userSlice.reducer