import { configureStore } from '@reduxjs/toolkit'
import reducer from './features/cart/cartStore'

const store = configureStore({
  reducer: {
    cart: reducer,
  },
})

export default store
