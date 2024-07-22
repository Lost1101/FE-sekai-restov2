import React, { useState, useEffect } from 'react';
import { IoIosTime } from "react-icons/io";
import foodLanding from '../components/assets/food.png';

const foodData = [
    { id: 'jmk1', nama: 'Spageti', desc: 'waduhh', hrg: 10000, time: '10' },
    { id: 'jmk2', nama: 'Waduh', desc: 'waduhh', hrg: 15000, time: '5' },
    { id: 'jmk3', nama: 'Kapal Karam', desc: 'waduhh', hrg: 20000, time: '15' },
];

const MenuCard = ({ onOrderChange }) => {
    const [count, setCount] = useState(() => {
        const initialCounts = {};
        foodData.forEach(food => {
            initialCounts[food.id] = 1;
        });
        return initialCounts;
    });

    const [price, setPrice] = useState(() => {
        const initialPrice = {};
        foodData.forEach(food => {
            initialPrice[food.id] = food.hrg;
        });
        return initialPrice;
    });

    const [order, setOrder] = useState([]);

    useEffect(() => {
        const updatedPrice = {};
        foodData.forEach(food => {
            updatedPrice[food.id] = food.hrg * count[food.id];
        });
        setPrice(updatedPrice);
    }, [count]);

    const increment = (id) => {
        setCount((prevCounts) => ({
            ...prevCounts,
            [id]: prevCounts[id] + 1,
        }));
    };

    const decrement = (id) => {
        setCount((prevCounts) => ({
            ...prevCounts,
            [id]: prevCounts[id] > 1 ? prevCounts[id] - 1 : 1,
        }));
    };

    const handleOrder = (data) => {
        const [id, nama, hrg, jml] = data;
        const newOrderItem = { id, nama, hrg, jml };
        setCount((prevCounts) => ({
            ...prevCounts,
            [id]: 1,
        }));
        setOrder((prevOrder) => [...prevOrder, newOrderItem]);
        onOrderChange([...order, newOrderItem]);
    };

    return (
        <div className='grid grid-cols-2 gap-4 w-3/4 pr-5 pl-5'>
            {foodData.map((data) => (
                <div className="border border-black bg-white rounded-md flex justify-evenly" key={data.id}>
                    <div>
                        <img src={foodLanding} alt="" className="w-24 rounded-md mt-3" />
                        <button className="bg-orange-700 text-white font-semibold rounded-md w-full p-2 inline-block mt-3 hover:bg-orange-900 duration-200" onClick={() => { handleOrder([data.id, data.nama, price[data.id], count[data.id]]); }}>Order</button>
                    </div>
                    <div className="p-5 w-2/3">
                        <h1 className="font-bold text-lg">{data.nama}</h1>
                        <div className="h-16 overflow-hidden text-wrap mb-3">
                            <p className="text-xs">{data.desc}</p>
                        </div>
                        <div className="flex text-xs w-full">
                            <div className="border border-black mr-5 rounded-md">
                                <button onClick={() => increment(data.id)} className="pr-2 pl-2 p-1 duration-300 hover:bg-gray-300">+</button>
                                <span className="pr-3 pl-3 p-1">{count[data.id]}</span>
                                <button onClick={() => decrement(data.id)} className="pr-2 pl-2 p-1 duration-300 hover:bg-gray-300">-</button>
                            </div>
                            <div className="mt-1">
                                <span className="text-gray-400"><IoIosTime className="inline-block mr-1" />{data.time} min</span>
                                <span className="mr-5 ml-5 font-semibold">Rp. {price[data.id]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuCard;
