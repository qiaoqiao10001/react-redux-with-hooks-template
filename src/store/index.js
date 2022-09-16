import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user'
import cartSlice from './slices/cart'

export default configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice
  }
})