import React from 'react'
import Navbar from '../components/Navbar'
import Baner from '../components/Baner'
import Items_component from '../components/Items_component'
import Basement from '../components/Basement'
import Blog from '../components/Blog'
import End from '../components/End'




export const Home = () => {
  return (
    <div>
        
        <Navbar />
        <Baner/>
        <Items_component/>
        <Basement/>
        <Blog/>
        <End/>
    </div>
    
  )
}

export default Home