import { FaUserCircle } from "react-icons/fa";

const Testi = () => {
    return(
        <div className="mt-10">
            <h1 className="font-bold text-4xl text-center">Words from our <span className="text-orange-700">customer</span>!</h1>
            <div className="grid grid-flow-col grid-cols-3 gap-10 w-2/3 m-auto p-5 mt-5">
                <div className="text-center bg-white rounded-xl shadow-2xl p-5">
                    <FaUserCircle  className="text-6xl m-auto"/>
                    <h2 className="mt-5 text-sm">From:</h2>
                    <p className="font-bold text-sm">Farhan Kebab</p>
                    <p className="mt-5 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure accusamus, distinctio ipsum blanditiis corrupti reiciendis quod pariatur voluptatem voluptate vitae soluta aut ipsa sint eligendi, fugit provident placeat, minima aperiam!</p>
                </div>
                <div className="text-center bg-white rounded-xl shadow-2xl p-5">
                    <FaUserCircle  className="text-6xl m-auto"/>
                    <h2 className="mt-5 text-sm">From:</h2>
                    <p className="font-bold text-sm">Farhan Kebab</p>
                    <p className="mt-5 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure accusamus, distinctio ipsum blanditiis corrupti reiciendis quod pariatur voluptatem voluptate vitae soluta aut ipsa sint eligendi, fugit provident placeat, minima aperiam!</p>
                </div>
                <div className="text-center bg-white rounded-xl shadow-2xl p-5">
                    <FaUserCircle  className="text-6xl m-auto"/>
                    <h2 className="mt-5 text-sm">From:</h2>
                    <p className="font-bold text-sm">Farhan Kebab</p>
                    <p className="mt-5 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure accusamus, distinctio ipsum blanditiis corrupti reiciendis quod pariatur voluptatem voluptate vitae soluta aut ipsa sint eligendi, fugit provident placeat, minima aperiam!</p>
                </div>
            </div>
        </div>
    )
}

export default Testi;