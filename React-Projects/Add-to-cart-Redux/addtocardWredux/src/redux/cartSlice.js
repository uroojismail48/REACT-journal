import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
   
    name: " cart",
    initialState: {
        items: [],
    },

   
    reducers: {
        addTocart: (state, action) => {
            const existCart = state.items.find(
                (items) => items.id === action.payload.id
            );
            if (existCart) {
                existCart.quantity += 1
                console.log(`added more ${existCart.title}`)
          
            } else {
                state.items.push({
                    ...action.payload, quantity: 1,
                  
                });
                  console.log("added 1")
            };
        }
    }
});
export const { addTocart } = cartslice.actions;
export default cartslice.reducer;
