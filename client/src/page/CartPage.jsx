import React, { useState } from 'react';
import '../styles/CartPage.css';
import img from '../assets/cart.jpeg';

const OrderConfirmation = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrderPlacement = () => {
    const timer = setTimeout(() => {
      setOrderPlaced(true);
    }, 1000); 

    return () => clearTimeout(timer);   
  };

  return (
    <div className="signin-container">
      <div className="image-section">
        <img src={img} alt="Restaurant" />
      </div>
      <div className="form-section">
        <h2>Cart</h2>
        <div className="restaurant-info">
          <p>
            <h3>Conan</h3>
            <span>Continental, American</span><br/>
            <span>Peelamedu</span>
          </p>
        </div>
        <div className="item-details">
          <div className="item">
            <span>Paneer Qt's</span>
            <span className='rate'>1</span>
            <span className='rate'>Rs.240.00</span>
          </div>
        </div>
        <h3 className="bill-details-heading">Bill Details</h3>
        <div className="bill-details">
          <div className="bill-item">
            <span>Item Total</span>
            <span className='rate'>Rs.240.00</span>
          </div>
          <div className="bill-item">
            <span>Delivery Partner Fee</span>
            <span className='rate'>Rs.32.00</span>
          </div>
          <div className="bill-item">
            <span>GST and Restaurant Charges</span>
            <span className='rate'>Rs.18.00</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span className='rate'>Rs.290.00</span>
          </div>
        </div>
        {orderPlaced ? (
          <div className="confirmation-message">
            Your order has been confirmed
            <br />
            Our delivery partner will arrive soon.
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); handleOrderPlacement(); }}>
            <button type="submit" className="pay-button">Pay On Delivery</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default OrderConfirmation;
