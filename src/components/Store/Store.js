import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Phone from "../Phone/Phone";
import "./Store.css";

const Store = () => {
    const [phones, setPhones] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("oppo.json")
            .then((res) => res.json())
            .then((data) => setPhones(data));
    }, []);

    const handleAddToCart = (phone) => {
        console.log(phone);
        const newCart = [...cart, phone];
        setCart(newCart);
        console.log(newCart);
    };

    return (
        <div className="store-container">
            <div className="phone-container">
                {phones.map((phone) => (
                    <Phone
                        key={phone.id}
                        phone={phone}
                        handleAddToCart={handleAddToCart}
                    ></Phone>
                ))}
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Store;
