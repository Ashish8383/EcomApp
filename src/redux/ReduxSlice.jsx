import { createSlice } from '@reduxjs/toolkit'

 const ecomStoreSlice = createSlice({
  name: 'ecomStore',
  initialState:{
    cartproduct:[],
    deleteCartP:Number
  },
  reducers: {
   AddToCart:(state,action)=>{
     state.cartproduct.push({...action.payload,Count:1})
   },

   RemoveCartP:(state,action)=>{
    state.cartproduct = state.cartproduct.filter(item => item.id !== action.payload);   
  },
  IncrementProductQuantity: (state, action) => {
    const product = state.cartproduct.find(item => item.id == action.payload);
    if (product) {
      product.Count += 1; // Update directly
    }
  },
  DecrementProductQuantity: (state, action) => {
    const product = state.cartproduct.find(item => item.id === action.payload);
    if (product && product.Count > 0) {
      product.Count -= 1;
    }
  }
  }
})

export const { AddToCart,RemoveCartP,IncrementProductQuantity,DecrementProductQuantity} = ecomStoreSlice.actions
export default ecomStoreSlice