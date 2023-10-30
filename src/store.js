import { configureStore } from '@reduxjs/toolkit'
import reducer from './features/cart/cartStore'
import modalReducer from './features/modal/modalSlice'
const store = configureStore({
  reducer: {
    cart: reducer,
    modal: modalReducer,
  },
})

export default store
