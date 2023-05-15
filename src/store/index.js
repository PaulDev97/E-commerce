import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../Redux/Categories/categoriesSlice";
import productsSlice from "../Redux/Products/productsSlice";
import cartSlice from "../Redux/Cart/cartSlice";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import userSlice from "../Redux/Login/loginSlice";







const reducers = combineReducers(
  {
    categories:categoriesSlice,
    products:productsSlice,
    cart: cartSlice,
    user: userSlice
  }
)

const persistConfig = {
  key: 'root',
  storage,
  whitlist: ['cart', 'user']
} 

const persistedReducer = persistReducer(persistConfig,reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({ serializableCheck: false }),
})



export const  persistor = persistStore(store)