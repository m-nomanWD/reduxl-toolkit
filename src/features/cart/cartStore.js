import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import cartItem from '../../cartItem'
const url = 'https://www.course-api.com/react-useReducer-cart-project'
export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err))
})
const initialState = {
  cart: [],
  total: 0,
  amont: 0,
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
    totalCheck: (state) => {
      let amount = 0
      let total = 0
      state.cart.forEach((item) => {
        console.log(item.price)
        amount += item.amount
        total += item.amount * item.price
      })

      state.amont = amount
      state.total = total
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.cart = action.payload
      state.isLoading = false
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

export const { clearCart, increase, decrease, removeItem, totalCheck } =
  cartSlice.actions
export default cartSlice.reducer
