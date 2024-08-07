import React, { useState, useEffect } from 'react';
import numberComma from './assets/commaMoney';

const CheckoutCard = ({data, onResetOrder}) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const calculateTotalPrice = () => {
            const total = data.reduce((acc, order) => {
                return acc + order.harga * order.jml;
            }, 0);
            setTotalPrice(total);
        };
        calculateTotalPrice();
    }, [data]);
    
    return(
        <>
            <div className="bg-white border border-black rounded-md w-1/5 h-fit">
            <div className='bg-orange-700 text-white text-center p-2'>Order List</div>
            <div className='p-5'>
                {data.map((order, index) => (
                    <div key={index}>
                        <div className='flex justify-between text-sm'><div className='w-1/4'>{order.id}</div> <div className='w-1/2 font-bold'>{order.nama}</div> x <div className='w-1/4'>{order.jml}</div></div>
                    </div>
                ))}
                    <div className="mt-5">
                        Total Price: <span className='font-bold'>Rp. {numberComma(totalPrice)}</span>
                    </div>
                    <button className='w-full bg-orange-700 rounded-md text-white p-2 mt-5 hover:bg-orange-900 duration-200' onClick={onResetOrder}>Reset</button>
                    <button className='w-full bg-orange-700 rounded-md text-white p-2 mt-5 hover:bg-orange-900 duration-200'>Checkout</button>
            </div>
            </div>
        </>
    )
}

export default CheckoutCard;