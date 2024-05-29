import React from 'react'
import './Navbar.css'
import image from '../../assets/type4.jpg'

function Navbar() {
  return (
    <div>
        <nav className="nav">
            <img src={image} alt="Logo" />
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#aboutUs">About us</a>
        </nav>
    </div>
  )
}

export default Navbar