import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/SignIn.css';
import Image from '../assets/owner.jpeg';

const Rest_SignIn = () => {
  const navigate = useNavigate();
  const [phoneEntered, setPhoneEntered] = useState(false);
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePhoneKeyDown = (event) => {
    if (event.key === 'Enter' && phone.trim() !== '') {
      setPhoneEntered(true);
      event.preventDefault();
    }
  };

  const handleClick=()=>{
    navigate(`/rp`);
  }

  return (
    <div className="signin-container" style={{}}>
      <div className="image-section">
        <img src={Image} alt="Food and drinks" />
      </div>
      <div className="form-section">
        <h2>SIGN IN</h2>
        <form>
          <input type="text" placeholder="Username" name="user"/>
          <input 
            type="tel" 
            placeholder="Phone Number" 
            name="phno"
            value={phone}
            onChange={handlePhoneChange} 
            onKeyDown={handlePhoneKeyDown}
          />
          {phoneEntered && (
            <input 
              type="text" 
              placeholder="Enter OTP" 
            />
          )}
          <button type="submit" onClick={()=>handleClick()}>Sign In</button>
        </form>
        <p>Do not have an account? <a href={`/rs`}>Sign Up</a></p>
      </div>
    </div>
  );
};

export default Rest_SignIn;
