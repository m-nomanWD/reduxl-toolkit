import { useEffect } from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import store from './store'
import { totalCheck } from './features/cart/cartStore'
import './App.css'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'

function App() {
  const { cart } = useSelector((store) => store.cart)

  const { isOpen } = useSelector((store) => store.modal)
  console.log(isOpen)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(totalCheck())
  }, [cart])
  return (
    <div className='App'>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  )
}

export default App
