import React from 'react';
import { Navigate } from "react-router-dom";
import '../styles/HotelCard.css';
import hotelImage from '../assets/mughal.jpeg';

const CardComponent = ({imgUrl, hotelName, rating, cuisine, location,handleClick}) => {
    return (
        <div className="card" onClick={handleClick}>
            <img src={imgUrl} alt={hotelName} className="card-image" />
            <div className="card-info">
                <div className="card-header">
                    <h2 className="card-title">{hotelName}</h2>
                    <div className="card-rating">
                        <span className="rating-star">⭐</span>
                        <span className="rating-value">{rating}</span>
                    </div>
                </div>
                <p className="card-cuisine">{cuisine}</p>
                <p className="card-location">{location}</p>
            </div>
        </div>
    );
};

export default CardComponent;
