import React, { useState, useEffect, useNavigate } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

export default function Signup() {
  const initialValue = { email: "", password: "", confirmPassword: "" };
  const [user, setUser] = useState(initialValue);
  const [usererror, setUsererror] = useState({});
  const [submitted, setsubmitted] = useState(false);

  const newInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    
  };

  const submitData = async (e) => {
    e.preventDefault();
    setUsererror(validation(user));

    setsubmitted(true);
  };

  const validation = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pregex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!values.email) {
      errors.email = "* email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "*valid email required";
    }
  

    if (!values.password) {
      errors.password = "*password is required";
    } else if (!pregex.test(values.password)) {
      errors.password =
        "should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
    }
    else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "password does not match";
    }
    return errors;
  };

  return (
    <>
      <div className="login_page">
        <form onSubmit={submitData} method="POST">
          <h1>Signup Page</h1>
          <div className="details">
            <h6>E-mail Id:</h6>
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

            <h6>Password:</h6>
            <input
              type="password"
              placeholder="Enter your password"
              className="box"
              name="password"
              onChange={newInput}
            />
            <br />
            <p>{usererror.password}</p>

            <h6>Confirm-Password:</h6>
            <input
              type="password"
              placeholder="Enter your password again"
              className="box"
              name="confirmPassword"
              onChange={newInput}
            />
            <br />
            <p>{usererror.confirmPassword}</p>

            <div className="send">
              <button type="submit" id="button">
                SignUp
              </button>
              <div className="register">
          <span>Already have an account? <Link to="/">login</Link></span>
          </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
