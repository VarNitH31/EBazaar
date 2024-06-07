import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlicer";
export const store = configureStore({


    reducer:{
        cart: cartReducer,
    }

})