import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginCard from './LoginCard';
import { GrRestaurant } from "react-icons/gr";

const Navbar = ({ pages }) => {
    const [show, setShow] = useState(false);

    const showLogin = () => {
        setShow(true);
    }

    const hideLogin = () => {
        setShow(false);
    }

    return(
        <>
        <LoginCard show={show} handleClose={hideLogin}/>
            <div className='p-4 shadow-md flex justify-between fixed top-0 z-10 w-full bg-white'>
                <div>
                    <GrRestaurant className="text-orange-700 text-4xl inline-block mr-2"/>
                    {pages.map((pages, index) => (
                    <Link to={pages.path} key={index} className='m-5 font-semibold duration-300 hover:text-orange-700'>
                        {pages.name}
                    </Link>
                    ))}
                </div>
                <div>
                    <button className='bg-orange-700 text-white font-semibold rounded-md pr-5 pl-5 p-2 inline-block mr-2 hover:bg-orange-900 duration-200' onClick={() => showLogin()}>
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar;