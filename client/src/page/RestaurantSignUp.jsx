import React, { useEffect, useRef } from 'react';
import '../styles/SignUp.css';
import Image from '../assets/owner.jpeg';

const Rest_SignUp = () => {
  return (
    <div className="signup-container">
      <div className="image-section">
        <img src={Image} alt="Food and drinks" />
      </div>
      <div className="form-section">
        <h2>SIGN UP</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Pin code" />
          <button type="submit">Sign Up</button>
        </form>
        <p>Have an account? <a href={`/rsi`}>Sign In</a></p>
      </div>
    </div>
  );
};

export default Rest_SignUp;
