import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../Redux/Categories/categoriesSlice";
import productsSlice from "../Redux/Products/productsSlice";








const reducers = combineReducers(
  {
    categories:categoriesSlice,
    products:productsSlice,
   
  }
)


const store = configureStore({
  reducer:reducers
})


export default store