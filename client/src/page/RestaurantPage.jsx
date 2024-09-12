import React from "react";
import DeliveryItem from "../components/OrderDetails";
import "../styles/RestaurantPage.css";

const RestaurantPage = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">NOVA</div>
            </nav>
            <div className="restaurant">
                <div className="box">
                    <div className="restaurant-info">
                        <img
                            src="https://images.unsplash.com/photo-1522701025355-3b334358d451?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="restaurant"
                            className="res-image"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RestaurantPage;
