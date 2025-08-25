import { PiWarningBold } from "react-icons/pi";
import "./YellowNotification.css"

import React from 'react'

const YellowNotification = ({ message }) => {
    return (
        <div className="yellow">
            <p>{message}</p>
            <div className="warning"> <PiWarningBold /> </div>
        </div>
    )
}

export default YellowNotification
