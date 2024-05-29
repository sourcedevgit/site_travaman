import React from 'react'
import "../App.css";

export const Navbar = () => {
  return (
    <div className='navbar-main'>
        <div className="container_1">
            
            <img className = "logo" src="trava.svg" alt="" />
            <div className="name">TRAVAMAN</div>
            <div className="button_container">
                <a href="#/">Home</a>
                <a href="#/">Shop</a>
                <a href="#/">Plant Care</a>
                <a href="#/">Blogs</a>
            </div>
            <div className="sb_container">
            <img src="search.svg" alt="" />
            <img src="basket.svg" alt="" />
            </div> 
            <button className='login_button'>
                <img src="Login.svg" alt="" />
                <p>Login</p>
            </button>
        </div>
    </div>
  )
}
