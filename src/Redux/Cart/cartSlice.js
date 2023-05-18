import { addProductToCart, deleteProductFromCart } from "./cartUtils";

const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
  cartItems:[],
  hidden: false,
  success:false
}

const cartSlice = createSlice ({
  name:'cart',
  initialState:initialState,

  reducers: {
    addProduct: (state,action) => {

      return {
        ...state,
        cartItems: addProductToCart(state.cartItems,action.payload)
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
    }),

    buyProducts:  (state)=> {
      return {
        ...state,
        cartItems: [],
        success: !state.success
      }
    },
  }
})



export const  { addProduct, deleteProduct, clearCart, toggleHidden, buyProducts} = cartSlice.actions


export default cartSlice.reducer

