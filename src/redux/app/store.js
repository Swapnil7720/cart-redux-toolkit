import { configureStore } from "@reduxjs/toolkit";
import NumberSlice from "../features/AddNumb/NumberSlice";
// import cartSlice from "../features/Cart/cartSlice";

export const store = configureStore({

    reducer : {
    //    cart : cartSlice,

        number : NumberSlice
        
    },

}); 