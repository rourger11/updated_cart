import React from 'react'
import './Navbar.css'
import  cart from '../images/car.png'
import {NavLink,Link} from 'react-router-dom'
import {useSelector} from 'react-redux'



export default function Navigation(e){

  const getdata= useSelector((state)=>state.cartreducer.carts);

  const len=getdata.length;
  return (


      <>
  
  <ul className='navbar1'>
  <li> <p>This is your store </p></li>

  <li> <NavLink to='/Home'>Home </NavLink> </li>
  <div className='d_flex'>
  <p id='item'>
          {len}

  </p>
  {
    len == 0 ? <NavLink to = '/Cartitems/:id'><img src={cart} alt='abc' className='cart'/> </NavLink> :
    getdata.map((item,id)=>{
      return(
         <NavLink to={`/Cartitems/${item.id}`}><img src={cart} alt='abc' className='cart'/></NavLink>
      )  }
     ) }
  
  <div>

 
  </div>
  </div>

</ul>

</>
  )
}
