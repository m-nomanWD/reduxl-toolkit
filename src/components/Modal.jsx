import React from 'react'
import { clearCart } from '../features/cart/cartStore'
import { close } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux'
export default function Modal() {
  const dispatch = useDispatch()
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h2>are you sure to remove all items form the cart ?</h2>
        <div className='btn-container'>
          <button
            className='btn conform'
            onClick={() => {
              dispatch(clearCart())
              dispatch(close())
            }}
          >
            conform
          </button>
          <button className='btn cancel' onClick={() => dispatch(close())}>
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}
