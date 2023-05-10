import { addProductToCart, deleteProductFromCart } from "./cartUtils";

const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
  cartItems:[],
  hidden: false
}

const cartSlice = createSlice ({
  name:'cart',
  initialState:initialState,

  reducers: {
    addProduct: (state,action) => {
      return {
        ...state,
        cartItems: addProductToCart(state.cartItems, action.payload)
      }
    },

    deleteProduct: (state,action) => {
      return{
        ...state,
        cartItems: deleteProductFromCart(state.cartItems, action.payload)
      }
    },

    clearCart: (state)=> {
      return {
        ...state,
        cartItems: []
      }
    },

    toggleHidden: (state => {
      return{
        ...state,
        hidden: !state.hidden
      }
    })
  }
})



export const  { addProduct, deleteProduct, clearCart, toggleHidden} = cartSlice.actions


export default cartSlice.reducer

