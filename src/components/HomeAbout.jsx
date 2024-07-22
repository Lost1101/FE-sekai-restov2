import whyImg1 from './assets/1.png';
import whyImg2 from './assets/2.png';
import whyImg3 from './assets/3.png';

const About = () => {
    return(
    <div className="mt-10">
            <h1 className="font-bold text-4xl text-center">Why <span className="text-orange-700">Isekai Resto</span>?</h1>
            <div className="grid grid-flow-col grid-cols-3 gap-10 w-2/3 m-auto p-10">
                <div className=" bg-white rounded-xl shadow-lg p-5">
                    <img src={whyImg1} alt="" className='max-w-56'/>
                    <p className='text-xl font-bold mt-10'>Lorem ipsum dolor sit amet</p>
                </div>
                <div className=" bg-white rounded-xl shadow-lg p-5">
                    <img src={whyImg2} alt="" className='max-w-56'/>
                    <p className='text-xl font-bold mt-10'>Consectetur adipisicing elit</p>
                    </div>
                <div className=" bg-white rounded-xl shadow-lg p-5">
                    <img src={whyImg3} alt="" className='max-w-56'/>
                    <p className='text-xl font-bold mt-10'>Eligendi corporis assumenda</p>
                    </div>
            </div>
    </div>
    )
}

export default About;