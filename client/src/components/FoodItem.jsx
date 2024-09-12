import React, { useEffect, useState } from 'react';
import '../styles/FoodItem.css';
import axios from "axios";

const FoodItem = ({ rest_id }) => {
  const [foodItems, setFoodItems] = useState([]);

  const display = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/food/getFood/${rest_id}`);
      setFoodItems(response.data.map(item => ({ ...item, quantity: 0 }))); // Initialize quantity for each item
    } catch (error) {
      console.error('Error fetching food item data:', error);
    }
  };

  useEffect(() => {
    display();
  }, []);

  const incrementQuantity = (index) => {
    setFoodItems(prevItems => {
      return prevItems.map((item, i) => 
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decrementQuantity = (index) => {
    setFoodItems(prevItems => {
      return prevItems.map((item, i) => 
        i === index && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };


  return (
    <div>
      {foodItems.map((item, index) => (
        <div className="food-item" key={index}>
          <div className="details">
            <div className="name">{item.name}</div>
            <div className="price">Rs.{item.price}</div>
            <div className="veg-icon">●</div>
          </div>
          <div className="controls">
            <button className="decrement" onClick={() => decrementQuantity(index)}>−</button>
            <div className="quantity">{item.quantity}</div>
            <button className="increment" onClick={() => incrementQuantity(index)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodItem;

