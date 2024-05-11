import { createSlice } from "@reduxjs/toolkit";


const NumberSlice = createSlice({

    name : "number",

    initialState : {
        
        items : [
            
        ],
    },

    reducers : {
                 
        addToCart : (state, action)=>{

               const newIted = action.payload;
               
               state.items.push(newIted)
         }

         ,

         clearCart : (state)=>{
            state.items = []
         } 
        ,
       inc : (state)=> state + 1,
        dec : (state)=> state -1
    }
})


export const {inc, dec, addToCart, clearCart} = NumberSlice.actions
export default NumberSlice.reducer