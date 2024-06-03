import React from 'react'
import Navbar from '../components/Navbar'
import Baner from '../components/Baner'
import Items_component from '../components/Items_component'
import Basement from '../components/Basement'






export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Baner/>
        <Items_component/>
        <Basement/>

    </div>
    
  )
}

export default Home