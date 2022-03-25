import React, { useEffect, useState } from "react";
import Phone from "../Phone/Phone";
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
                {phones.map((phone) => (
                    <Phone key={phone.id} phone={phone}></Phone>
                ))}
            </div>

            <div className="cart-container">
                <h4>Cart</h4>
            </div>
            
        </div>
    );
};

export default Store;
