import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name : 'cart',
    initialState : {
        items : [
            
        ],
        totalPrice : 0,
    },

    reducers : {

        addToCart : (state, action)=>{
            const newItem = action.payload;
            state.items.push(newItem);
            state.totalPrice  += newItem.price   
        }
,
        clearCart : (state)=>{
            state.items = [],
            state.totalPrice = 0
        },

        addnumber : (state)=> state.number + 10,
    }
});

export default cartSlice.reducer
export const {addToCart, clearCart, addnumber } = cartSlice.actions
