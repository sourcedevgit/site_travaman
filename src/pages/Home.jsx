import React from 'react'
import Navbar from '../components/Navbar'
import Baner from '../components/Baner'
import Items_component from '../components/Items_component'
import Filtres from '../components/Filters'





export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Baner/>
        <Items_component/>
        <Filtres/>
    </div>
    
  )
}

export default Home