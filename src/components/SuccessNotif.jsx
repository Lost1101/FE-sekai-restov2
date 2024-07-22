import { FaCheckCircle } from "react-icons/fa";

const SuccessNotif = () => {
    return(
        <div className="w-full fixed z-20 mt-2">
            <div className="bg-green-300 w-fit rounded-md text-green-950 p-3 m-auto">
                Successful! <FaCheckCircle className="inline-block"/>
            </div>
        </div>
    )
}

export default SuccessNotif;