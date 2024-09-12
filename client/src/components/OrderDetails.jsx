import React from "react";
import PropTypes from "prop-types";
import "../styles/DeliveryPartnerPg.css";

const DeliveryItem = ({ imageUrl, orderId, customer, address, status }) => {
    return (
        <div className="delivery-item">
            <img src={imageUrl} alt="Delivery" className="delivery-image" />
            <div className="delivery-details">
                <p>Order ID: {orderId}</p>
                <p>Customer: {customer}</p>
                <p>Delivery Address: {address}</p>
                <p>Status: {status}</p>
            </div>
        </div>
    );
};

DeliveryItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};

export default DeliveryItem;
