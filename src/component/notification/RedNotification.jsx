import { CgDanger } from "react-icons/cg";

import "./RedNotification.css"

const RedNotification = ({message}) => {
    return (
        <div className="red">
            <p>{message}</p>
            <div className="danger"> <CgDanger /> </div>
        </div>
    )
}

export default RedNotification