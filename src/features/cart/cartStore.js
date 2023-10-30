import { createSlice } from '@reduxjs/toolkit'
import cartItem from '../../cartItem'
const initialState = {
  cart: cartItem,
  total: 0,
  amont: 4,
  isLoading: false,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = []
    },
    removeItem: (state, action) => {
      const newList = state.cart.filter((item) => item.id !== action.payload)
      state.cart = newList
    },
    increase: (state, action) => {
      const newList = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.amount++
          return item
        }
        return item
      })
      state.cart = newList
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cart.find((item) => item.id === payload)
      cartItem.amount--
    },
  },
})

export const { clearCart, increase, decrease, removeItem } = cartSlice.actions
export default cartSlice.reducer
