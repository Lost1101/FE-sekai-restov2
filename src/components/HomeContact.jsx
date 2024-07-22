import { GrRestaurant } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
    return(
        <div className="bg-orange-700 mt-10">
            <div className="p-20 flex justify-between">
                <div>
                    <div className="mb-5 flex">
                        <GrRestaurant className="text-white text-5xl mr-2"/>
                        <div><span className="text-white font-bold block">Isekai <span className=" block">Resto</span></span></div>
                    </div>
                    <div className="text-white text-sm mb-5">
                        <div>
                            <FaLocationDot className="inline-block mr-4"/><span>Jl.Jonathan Joestar no. 69, Morioh-Cho 10101</span>
                        </div>
                        <div>
                            <BsFillTelephoneFill className="inline-block mr-4"/><span>(69)69420911</span>
                        </div>
                        <div>
                            <MdEmail className="inline-block mr-4"/><span>waduh@gmail.com</span>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47824.008967596106!2d108.16850611872457!3d-7.245816391864848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1721618414551!5m2!1sid!2sid" width={350} height={200} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <h1 className="text-white font-bold block">Follow Us</h1>
                    <ul className="text-white text-sm list-none mt-5">
                        <li><RiInstagramFill className="inline-block mr-3"/><a href="">@IsekaiRestoUwU</a></li>
                        <li><AiFillTikTok className="inline-block mr-3"/><a href="">@IsekaiRestoUwU</a></li>
                        <li><FaFacebook className="inline-block mr-3"/><a href="">@IsekaiRestoUwU</a></li>
                        <li><FaTwitter className="inline-block mr-3"/><a href="">@IsekaiRestoUwU</a></li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h1 className="text-white font-bold block">Suggestion Box</h1>
                    <form action="" className="mt-5">
                        <input type="name" name="name" id="name" placeholder="Your name..." className="block mt-5 p-2 rounded-md w-full"/>
                        <textarea name="content" id="content" placeholder="Type here..." className="block mt-5 p-2 rounded-md w-full"></textarea>
                        <button type="submit" className="border border-white rounded-md p-2 mt-5 text-white hover:bg-orange-800 duration-200">Submit</button>
                    </form>
                </div>
            </div>
    </div>
    )
}

export default Contact;