import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartStore'
import { open } from '../features/modal/modalSlice'
export default function CartContainer() {
  const dispatch = useDispatch()
  const { cart, amont, total } = useSelector((store) => store.cart)
  if (amont < 1) {
    return (
      <div className='cart'>
        <h2>Your Bag</h2>
        <h4
          style={{
            color: 'gray',
            textTransform: 'capitalize',
            letterSpacing: '2px',
          }}
        >
          is currently Empty
        </h4>
      </div>
    )
  }
  return (
    <div className='cart'>
      <h2>Your Bag</h2>

      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}

      <footer>
        <div className='total-container'>
          <h4>Total:</h4>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className='btn cancel' onClick={() => dispatch(open())}>
          clear cart
        </button>
      </footer>
    </div>
  )
}
