import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from '../utils/cartSlice'
const reduxStore = configureStore({
    devTools:true,
    reducer:{
        cart : cartSliceReducer
    },

})

export default reduxStore;