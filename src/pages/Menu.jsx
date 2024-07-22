import React, { useState } from 'react';
import MenuCard from "../components/MenuCard";
import CheckoutCard from "../components/CheckoutCard";

const Menu = () => {
    const [order, setOrder] = useState([]);

    const handleOrderChange = (newOrder) => {
        setOrder(newOrder);
    };

    const resetOrder = () => {
        setOrder([]);
    };

    return(
        <>
        <div className="pt-28 flex">
            <MenuCard onOrderChange={handleOrderChange}/>
            <CheckoutCard data={order} onResetOrder={resetOrder}/>
        </div>
        </>
    )
}

export default Menu;