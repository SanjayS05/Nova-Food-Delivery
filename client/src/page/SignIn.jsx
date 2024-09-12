import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/SignIn.css';
import signupImage from '../assets/signin.jpeg';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState('');

  const validateInputs = () => {
    const userRegex = /^[a-zA-Z0-9]{3,20}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!userRegex.test(user)) {
      alert("Invalid username. It should be alphanumeric and 3-20 characters long.");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      alert("Invalid phone number. It should be exactly 10 digits long.");
      return false;
    }
    return true;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    axios.get('http://localhost:5000/auth/login', { 
        params: { user, phone } 
      })
      .then((res) => {
        if (res.data.message === "Success") {
          alert("Logged in");
          navigate('/rl');
        } else {
          alert("No such user");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again.");
      });
  };

  
  return (
    <div className="signin-container">
      <div className="image-section">
        <img src={signupImage} alt="Food and drinks" />
      </div>
      <div className="form-section">
        <h2>SIGN IN</h2>
        <form>
          <input 
            type="text" 
            placeholder="Username" 
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            name="phno"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} 
          />
          <button type="submit" onClick={handleClick}>Sign In</button>
        </form>
        <p>Do not have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default SignIn;
