import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shopInfo: {},
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateShopInfo: (state, { payload }) => {
      state.shopInfo = payload
    },
  },
})

export const { updateShopInfo } = cartSlice.actions

export default cartSlice.reducer
