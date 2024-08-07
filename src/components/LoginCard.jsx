import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { signup } from '../redux/actions/authActions';
import { login } from '../redux/actions/authActions';
import { ReactComponent as MyLogo } from './assets/dummy_logo.svg';

const LoginCard = ({show, handleClose}) => {
    const [activeButton, setActiveButton] = useState('login');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSignup = (e) => {
        e.preventDefault();
        dispatch(signup(username, email, password));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    };

    return(
        <>
        <div className={`w-full fixed h-full top-0 z-20 backdrop-blur ${show  ? 'block' : 'hidden'}`}>
            <div className="w-1/3 relative h-auto m-auto bg-white rounded-md border border-black mt-20 p-7">
                <button type='button' className='font-extrabold text-xl absolute right-5 top-3 cursor-pointer' onClick={handleClose}>&#215;</button>
                <MyLogo className="fill-orange-700 m-auto"/>
                <div className='group w-2/3 m-auto flex justify-center border border-orange-700 rounded-md mt-5'>
                    <button className={`w-full p-2 duration-200 hover:bg-orange-700 hover:text-white ${activeButton === 'login' ? 'bg-orange-700 text-white' : ''}`} onClick={() => setActiveButton('login')}
                    >Login</button>
                    <button className={`w-full p-2 duration-200 hover:bg-orange-700 hover:text-white ${activeButton === 'signup' ? 'bg-orange-700 text-white' : ''}`} onClick={() => setActiveButton('signup')}>Sign Up</button>
                </div>
                <div className={`${activeButton === 'login' ? 'block' : 'hidden'}`}>
                    <form onSubmit={handleLogin} autoComplete='off' className='mb-5'>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="Username" className="w-full rounded-md p-2 border border-black mt-5" required/>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" className="w-full rounded-md p-2 border border-black mt-5" required/>
                        <div className='mt-5 flex justify-between text-xs'>
                            <div>
                                <input type="checkbox" name="Remember me" className='accent-orange-700'/><span className='ml-1'>Remember me</span>
                            </div>
                            <div>
                                <a href="" className='underline text-orange-700'>Forgot password?</a>
                            </div>
                        </div>
                        <button className='w-full bg-orange-700 mt-5 text-white duration-300 p-2 rounded-md hover:bg-orange-900'>Login</button>
                    </form>
                </div>
                <div className={`${activeButton === 'signup' ? 'block' : 'hidden'}`}>
                <form onSubmit={handleSignup} autoComplete='off'  className='mb-5'>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="Username" className="w-full rounded-md p-2 border border-black mt-5" required/>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="Email" className="w-full rounded-md p-2 border border-black mt-5" required/>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" className="w-full rounded-md p-2 border border-black mt-5" required/>
                        <div className='mt-5'>
                            <input type="checkbox" name="Remember me" className='accent-orange-700'/><span className='ml-1 text-xs font-semibold'>I agree to the Privacy Policy and Terms of Service</span>
                        </div>
                        <button className='w-full bg-orange-700 mt-5 text-white duration-300 p-2 rounded-md'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginCard;