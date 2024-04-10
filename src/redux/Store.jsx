import { configureStore } from '@reduxjs/toolkit'
import ecomStoreSlice from './ReduxSlice'

export const store = configureStore({
  reducer: {
    name:'ecomStore',
    ecomStore:ecomStoreSlice.reducer

  },
})