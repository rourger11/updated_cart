import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import {useNavigate} from "react-router";
import {NavLink} from 'react-router-dom'
import {signInWithGooglePopup} from '../firebase.utils'
import { async } from "@firebase/util";



export default function Login() {
  const navigate = useNavigate()


  const initialValue = { email: "", password: ""};
  const [user, setUser] = useState(initialValue);
  const [usererror, setUsererror] = useState({});
  const [submitted, setsubmitted] = useState(false);



  const newInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitData = async e => {
    e.preventDefault();
    // setUsererror(validation(user));

    setsubmitted(true);

  };

  // const data = async()=>{
  //   const response = await axios.get("http://localhost:3003",user)
  //   const setUser=(response.data)

  //   setUserData(setUser)

  //      }

  // useEffect(() => {



    
  //     // data()
  //     // firebase();
  //     alert("Login Successfully");
  //     navigate("/Home")


  // }, []);



  const signin = async(e) => {
    const res = await signInWithGooglePopup();
    console.log(res)
  }

  // const firebase = async(e)=>{

  //   await axios({
  
  //     // Endpoint to send files
  //     url: "https://database-91a27-default-rtdb.firebaseio.com/data.json",
  //     method: "POST",
  //     headers: {
  
  //       // Add any auth token here
  //       authorization: "your token comes here",
  //     },
  
  //     // Attaching the form data
  //     data: user,
  //   })
  //   axios
  // .get("https://database-91a27-default-rtdb.firebaseio.com/data.json")
  // .then(data => console.log(data.data))
  // .catch(error => console.log(error));
  // }


  const validation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pregex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!values.email) {
      errors.email = "* email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "*valid email required";
    }
    
    if (!values.password) {
      errors.password = "*password is required";
    } else if (!pregex.test(values.password)) {
      errors.password ="should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
    } 
    return errors;
  };



  return (

<>
    <div className="login_page">
 
    
      <form onSubmit={submitData} method="POST">
        <h1>Login Page</h1>
        <div className="details">
          <h6>*E-mail Id:</h6>
          <input
            type="text"
            placeholder="Enter your email-id"
            className="box"
            name="email"
            onChange={newInput}
            autoFocus
          />
          <br />
          <p>{usererror.email}</p>

          <h6>*Password:</h6>
          <input
            type="password"
            placeholder="Enter your password"
            className="box"
            name="password"
            onChange={newInput}

          />
          <br />
          <p>{usererror.password}</p>

          <div className="send">
            <button type="submit" id="button" onClick={signin}>
              Login
            </button>
          </div>
          <div className="register">
          <span>Not registered yet? <NavLink to="/Signup">Signup</NavLink></span>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

