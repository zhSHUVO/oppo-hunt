import { faRotate, faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRandomPhone, handleTryAgain }) => {
    // console.log(cart[(cart.length * Math.random()) << 0]);
    return (
        <div className="cart">
            <div>
                <h4>Cart</h4>
                {cart.map((phone) => (
                    <div className="cart-info" key={phone.id}>
                        <p>{phone.phone_name}</p>
                        <img src={phone.image} alt="" />
                    </div>
                ))}
            </div>
            <div>
                <button
                    onClick={() => handleRandomPhone(cart)}
                    className="try-choose-btn"
                >
                    <p className="btn-text">Choose Random Phone</p>
                    <FontAwesomeIcon icon={faShuffle}></FontAwesomeIcon>
                </button>
                <button
                    onClick={() => handleTryAgain(cart)}
                    className="try-choose-btn"
                >
                    <p className="btn-text">Try Again</p>
                    <FontAwesomeIcon icon={faRotate}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Cart;
