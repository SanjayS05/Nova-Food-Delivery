import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/HotelMain.css';
import FoodItem from "../components/FoodItem";
import Image from "../assets/mughal.jpeg";

const HotelMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel } = location.state || {}; // Get hotel details from state

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">NOVA</div>    
      </nav>
      <div className="restaurant-menu">
        <div className="box">
          <div className="restaurant-info">
            <img src={hotel?.image || Image} alt="Restaurant" className="restaurant-image" />
            <div className="restaurant-details">
              <h1>{hotel?.hname || "Hotel Name"}</h1>
              <p>{hotel?.cuisine || "Cuisine"}</p>
              <p>{hotel?.address || "Address"}</p>
              <div className="rating">
                <span className="star">&#9733;</span>
                <p>{hotel?.rating || "Rating"}</p>
              </div>
            </div>
          </div>
          <div className="menu">
            <h2>Menu</h2>
            <h3>Starters</h3>
            <div className="menu-item">
              <FoodItem rest_id={hotel?.res_id} />
            </div>
          </div>
          <div className="cart-button" onClick={handleClick}>
            <button className="btn">Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelMain;