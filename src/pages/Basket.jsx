import React from 'react'
import Navbar from '../components/Navbar'
import End from '../components/End'
import Products from '../components/Basket/Products'



function Basket() {
  return (
    <div>
        <Navbar/>
        <Products/>
        <End/>
    </div>

  )
}

export default Basket