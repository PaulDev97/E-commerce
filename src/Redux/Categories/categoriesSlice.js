import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";


const initialState = {
  categories: categories,
  categorySelected :'All',
  

}


export const categoriesSlice = createSlice({

  name:'categories',
  initialState,


  reducers:{

    selectedCategory: (state,action) => {
      return {
        ...state, 
        categorySelected: action.payload === state.categorySelected ? state.categorySelected : action.payload
      }
  }
  
  
  }
  
})



export const {selectedCategory} = categoriesSlice.actions;

export default categoriesSlice.reducer;
