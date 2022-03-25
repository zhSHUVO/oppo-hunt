import React from "react";

const Cart = ({ cart }) => {
    return (
        <div>
            <h4>Cart</h4>
            <p>Item: {cart.length}</p>
        </div>
    );
};

export default Cart;
