import React from "react";
import DeliveryItem from "../components/OrderDetails";
import "../styles/DeliveryPartnerPg.css";

const DeliveryPartner = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">NOVA</div>
            </nav>
            <div className="delivery-partner-info">
                <div className="box">
                    <div className="partner-info">
                        <img
                            src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Delivery Partner"
                            className="partner-image"
                        />
                        <div className="partner-details">
                            <h1>Vijay Kumar</h1>
                            <p>ID: DP12345</p>
                            <p>Phone number: 1234567</p>
                        </div>
                    </div>
                    <div className="delivery-status">
                        <h2>New Deliveries</h2>
                        <DeliveryItem imageUrl="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg" orderId="121324" customer="sanjay" address="69, America" status="single"/>
                        <DeliveryItem imageUrl="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg" orderId="121242" customer="shansita" address="88, Korea" status="Married"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeliveryPartner;
