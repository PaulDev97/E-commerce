const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
  
  toggleMenu: false

}

const menuSlice = createSlice ({
  name:'menu',
  initialState:initialState,

  reducers: {

    hiddenMenu: (state => {
      console.log('estado =>', state)
      return{
        ...state,
        toggleMenu: !state.toggleMenu
      }
    })
  }
})



export const  { hiddenMenu} = menuSlice.actions


export default menuSlice.reducer
