import React, { useState, useEffect } from "react";

import "./Home.css";
// import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
// import { products } from "../Items/Items";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import cartData from "../Cartdata";
import {useDispatch} from 'react-redux'
import {addToCart} from '../actions/index'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";

export default function Home() {
const [show, setShow]=useState(false)
  const navigate = useNavigate();

const cart = (e) => {
  navigate('/Cartitems/:id')

}

  const [data, setData] = useState(cartData);

  const dispatch = useDispatch ();

  const send=(e)=>{
    toast.success("item added successfully",{autoClose:1000});
    dispatch(addToCart(e))
    setShow(true)
  }
  return (
    <>
      <Navigation />

      <div className="Container mt-3 ">
        <h2>Add Items To Your Cart</h2>

        <div className="row d-flex justify-content-center align-items-center">
        <ToastContainer 
        position="top-center"
        autoClose={100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        
        />

          {data.map((element, id) => {
            return (
              <Card  style={{ width: "20rem", border:"none" }} className="mx-1 mt-4  card_style" >
                <Card.Img variant="top" src={element.image}  style={{height:'16rem'}} className="mt-3"/>
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>Price:₹{element.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                {setShow ?<Button variant="primary" className="col lg-12" onClick={ ()=>send(element) }>
                    Add to Cart</Button>:
                    
                  <Button variant="secondary"className="col lg-12"onClick={(e)=>cart()} >
                    Go to Cart</Button>}
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
