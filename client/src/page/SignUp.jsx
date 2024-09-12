import React, { useState,useEffect, useRef } from 'react';
import '../styles/SignUp.css';
import signupImage from '../assets/signup.jpeg';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const SignUp = () => {
  
  const [user,setUser] = useState("");
  const [phone,setPhone] = useState("");
  const [addr,setAddr] = useState("");
  const [pincode,setPincode] = useState("");

  const validateInputs = () => {
    const userRegex = /^[a-zA-Z0-9]{3,20}$/;
    const pincodeRegex = /^[0-9]{6}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const addrRegex = /^[a-zA-Z0-9\s,.'-]{3,100}$/;

    if (!userRegex.test(user)) {
      alert("Invalid username. It should be alphanumeric and 3-20 characters long.");
      return false;
    }
    if (!pincodeRegex.test(pincode)) {
      alert("Invalid pincode. It should be exactly 6 digits long.");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      alert("Invalid phone number. It should be exactly 10 digits long.");
      return false;
    }
    if (!addrRegex.test(addr)) {
      alert("Invalid address. It should be 3-100 characters long and can include alphanumeric characters and some special characters.");
      return false;
    }
    return true;
  };

  const signUp = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    axios.post("http://localhost:5000/auth/register",
      {
        name : user,
        phno : phone,
        addr: addr,
        pincode: pincode

      }).then((res) => {
        if(res)
        {
          alert("Registered Successfully")
        }
        else
        {
          alert("Error Registering")
        }
    });
  };

  return (
    <div className="signup-container">
      <div className="image-section">
        <img src={signupImage} alt="Food and drinks" />
      </div>
      <div className="form-section">
        <h2>SIGN UP</h2>
        <form >
        <input type="text" 
          placeholder="Username" 
          name="user" 
          value={user}
          onChange={(e) => setUser(e.target.value)}/>
          <input type="tel" 
          placeholder="Phone Number" 
          name="phone" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}/>
          <input type="text" 
          placeholder="Address" 
          name="addr" 
          value={addr}
          onChange={(e) => setAddr(e.target.value)}/>
          <input type="text" 
          placeholder="Pin code" 
          name="pincode" 
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}/>
          <button onClick={signUp}>Sign Up</button>
        </form>
        <p>Have an account? <a href={`/signIn`}>Sign In</a></p>
      </div>
    </div>
  );
};

export default SignUp;
