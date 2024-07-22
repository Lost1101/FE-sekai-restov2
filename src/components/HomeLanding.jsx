import foodLanding from '../components/assets/food.png'
import { FaArrowRight } from "react-icons/fa";

const Landing = () => {
    return(
        <div className='p-5'>
            <div className="bg-landing-svg bg-no-repeat bg-center bg-cover h-screen flex justify-between p-10 pt-36 rounded-3xl shadow-2xl">
                <div className='w-1/2 m-auto mt-7 ml-3'>
                    <h1 className='text-7xl font-bold'>Welcome to <span className='text-orange-700'>Isekai Resto!</span></h1>
                    <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium omnis suscipit quos maiores magnam asperiores tenetur eius quibusdam recusandae quae molestias, blanditiis porro aperiam aspernatur quo quis ducimus possimus reiciendis!</p>
                    <button className='bg-orange-700 text-white font-semibold rounded-md mt-5 pr-5 pl-5 p-3 inline-block mr-2 hover:bg-orange-900 duration-200'>
                        Menu <FaArrowRight className='inline-block ml-3'/>
                    </button>
                </div>
                <div className= 'w-1/2'>
                    <img src={foodLanding} alt="" className='-rotate-45 rounded-3xl w-3/5 m-auto mt-7' />
                </div>
            </div>
        </div>
    )
}

export default Landing;