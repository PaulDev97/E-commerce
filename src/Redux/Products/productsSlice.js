import { createSlice } from "@reduxjs/toolkit"
import { cars } from "../../data/cars"



const initialState ={
  cars,
}


export const productsSlice = createSlice({
  name:'cars',
  initialState,

  reducers:{
    getProducts: (state) => {
      return state
    }
  }
})


export const {getProducts} = productsSlice.actions

export default productsSlice.reducer