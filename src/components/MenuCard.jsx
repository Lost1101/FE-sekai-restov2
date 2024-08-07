import React, { useState, useEffect } from 'react';
import { IoIosTime } from "react-icons/io";
import foodLanding from '../components/assets/food.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenus } from '../redux/actions/menuAction';
import numberComma from './assets/commaMoney';

const MenuCard = ({ order, onOrderChange }) => {
    const [count, setCount] = useState({});
    const [price, setPrice] = useState({});
    const dispatch = useDispatch();
    const menus = useSelector((state) => state.menus.menus);

    useEffect(() => {
        dispatch(fetchMenus());
    }, [dispatch]);

    useEffect(() => {
        const initialCounts = {};
        const initialPrice = {};
        menus.forEach(food => {
            initialCounts[food.id] = 1;
            initialPrice[food.id] = food.harga;
        });
        setCount(initialCounts);
        setPrice(initialPrice);
    }, [menus]);

    useEffect(() => {
        const updatedPrice = {};
        menus.forEach(food => {
            updatedPrice[food.id] = food.harga * count[food.id];
        });
        setPrice(updatedPrice);
    }, [count, menus]);

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
        const [id, nama, harga, jml] = data;
        const newOrderItem = { id, nama, harga, jml };
        setCount((prevCounts) => ({
            ...prevCounts
        }));
        onOrderChange([...order, newOrderItem]);
        console.log(order)
    };

    return (
        <div className='grid grid-cols-2 grid-rows-1 gap-4 w-3/4 pr-5 pl-5'>
            {menus.map((data) => (
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
                                <span className="text-gray-400"><IoIosTime className="inline-block mr-1" />{data.waktu} min</span>
                                <span className="mr-5 ml-5 font-semibold">Rp. {numberComma(price[data.id])}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuCard;
