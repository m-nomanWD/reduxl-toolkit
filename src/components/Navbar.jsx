import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { CartBag } from '../icons'

function Navbar() {
  const { amont } = useSelector((store) => store.cart)
  console.log(amont)
  return (
    <nav className='app__flex'>
      <div className='nav-center'>
        <div className='logo'>
          redux <span>Toolkit</span>
        </div>

        <CartBag />

        <p>{amont}</p>
      </div>
    </nav>
  )
}

export default Navbar
