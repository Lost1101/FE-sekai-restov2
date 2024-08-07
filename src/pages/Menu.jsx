import React, { useState } from 'react';
import MenuCard from "../components/MenuCard";
import CheckoutCard from "../components/CheckoutCard";
import { useDispatch, useSelector } from 'react-redux';

const Menu = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [order, setOrder] = useState([]);

    const handleOrderChange = (newOrder) => {
        setOrder(newOrder);
    };

    const resetOrder = () => {
        setOrder([]);
    };

    return(
        <>
        <div className="pt-28">
        {isAuthenticated ? '' : <p className='text-center mb-5 w-1/3 m-auto p-5 rounded-md bg-red-300'>Please login first to order</p>}
            <div className='flex'>
                <MenuCard order={order} onOrderChange={handleOrderChange} />
                {isAuthenticated ? <CheckoutCard data={order} onResetOrder={resetOrder}/> : ''}
            </div>
        </div>
        </>
    )
}

export default Menu;