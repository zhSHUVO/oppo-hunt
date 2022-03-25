import React, { useEffect, useState } from "react";
import "./Store.css";

const Store = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch("oppo.json")
            .then((res) => res.json())
            .then((data) => setPhones(data));
    }, []);

    return (
        <div className="store-container">
            <div className="phone-container">
                <h3>For products: {phones.length}</h3>
            </div>
            <div className="cart-container">
                <h4>Cart</h4>
            </div>
        </div>
    );
};

export default Store;
