import { MdError } from "react-icons/md";

const FailedNotif = () => {
    return(
        <div className="w-full fixed z-30 mt-2">
            <div className="bg-red-300 w-fit rounded-md text-red-950 p-3 m-auto">
                Error <MdError className="inline-block"/>
            </div>
        </div>
    )
}

export default FailedNotif;