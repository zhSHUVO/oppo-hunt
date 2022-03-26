import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Phone.css";

const Phone = ({ phone, handleAddToCart }) => {
    const { phone_name, image, price } = phone;
    return (
        <div className="phone">
            <img src={image} alt="" />
            <div className="info">
                <p>{phone_name}</p>
                <p>Price: {price}</p>
            </div>
            <button onClick={() => handleAddToCart(phone)} className="cart-btn">
                <p >Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Phone;
