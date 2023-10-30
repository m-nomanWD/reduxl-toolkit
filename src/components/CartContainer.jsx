import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartStore'
export default function CartContainer() {
  const dispatch = useDispatch()
  const { cart, amont, total } = useSelector((store) => store.cart)
  if (amont < 1) {
    return (
      <div className='cart'>
        <h2>Your Bag</h2>
        <h4>is Empty</h4>
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
        <div className='total container'>
          <h4>
            Total <span>$0</span>
          </h4>
        </div>
        <button className='btn' onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </div>
  )
}
