import React from "react";
import "./Phone.css";

const Phone = (props) => {
    const { phone_name, image, price } = props.phone;
    return (
        <div className="phone">
            <img src={image} alt="" />
            <div className="info">
                <p>{phone_name}</p>
                <p>Price: {price}</p>
            </div>
            <button className="cart-btn">
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Phone;
