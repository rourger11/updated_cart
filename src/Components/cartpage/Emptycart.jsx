import React from 'react'
import { NavLink } from 'react-router-dom'
import empty from "../images/empty cart.webp"
import "./Emptycart.css"
export default function Emptycart() {
  return (
    <div className='emptycart'> 
        <img src={empty} alt="cart is empty"/>
        <h3 >Cart is Empty</h3>
        <NavLink to= '/home' className="link">See Collection</NavLink>
    </div>
  )
}
