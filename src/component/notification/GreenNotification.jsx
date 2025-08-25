import "./GreenNotification.css"

import { GoCheck } from "react-icons/go";
const GreenNotification = ({message}) => {
    return (
        <div className="green">
            <p>{message}</p>
            <div className="check"> <GoCheck /> </div>
        </div>
    )
}

export default GreenNotification