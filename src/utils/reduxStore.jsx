import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from '../utils/cartSlice'
const reduxStore = configureStore({
    devTools:true,
    reducer:{
        cartSlice : cartSliceReducer
    },

})

export default reduxStore;