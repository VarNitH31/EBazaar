//cartSlicer.js

import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[],
}

export const cartSlice=createSlice({
   name:"cart",
   initialState,
   reducers:{
    addToCart: (state, action) => {
       window.alert("added to cart");
        const  productId  = action.payload;
        console.log(`the product id is ${productId}`);
        const productIndex = state.value.findIndex(product => product.product_id === productId);
      
        if (productIndex === -1) {
          state.value.push({ product_id: productId, quantity: 1 });
        } else {
          state.value[productIndex].quantity += 1;
        }
      },
    
    clearCartContent:(state)=>{
        state.value=[];
    },

    changeQuantity:(state,action)=>{
      console.log(action.payload);
       const {productId,change}=action.payload;
       console.log(productId);
       console.log(change)
       const item=state.value.find((item)=>item.product_id===productId)
       console.log(item);
       if(item){
        item.quantity+=change;
        console.log(item.quantity)
        
       }
       state.value=state.value.filter(item=>item.quantity!=0)
    }
      }
   }
)

export const { addToCart,changeQuantity,clearCartContent } = cartSlice.actions

export default cartSlice.reducer
