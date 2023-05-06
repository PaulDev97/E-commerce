import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../Redux/Categories/categoriesSlice";
import productsSlice from "../Redux/Products/productsSlice";
import cartSlice from "../Redux/Cart/cartSlice";








const reducers = combineReducers(
  {
    categories:categoriesSlice,
    products:productsSlice,
    cart: cartSlice
  }
)


const store = configureStore({
  reducer:reducers
})


export default store