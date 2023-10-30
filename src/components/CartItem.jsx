import React from 'react'
import { useDispatch } from 'react-redux'
import { increase, decrease, removeItem } from '../features/cart/cartStore'
export default function CartItem({ id, title, img, price, amount }) {
  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <div className='img-container'>
        <img src={img} alt='item-img' />
        <div className='center'>
          <h4>
            {title} <br /> <h5>${price}</h5>
          </h4>
          <h5 onClick={() => dispatch(removeItem(id))}>remove</h5>
        </div>
      </div>

      <div className='counter'>
        <span
          onClick={() => {
            dispatch(increase(id))
          }}
        >
          +
        </span>
        <span>{amount}</span>
        <span
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id))
              return
            }
            dispatch(decrease(id))
          }}
        >
          -
        </span>
      </div>
    </article>
  )
}
