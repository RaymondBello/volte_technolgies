import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = useContext();

export const StateContext = () => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();

    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [qty, setQty] = useState(1);

    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    )

}