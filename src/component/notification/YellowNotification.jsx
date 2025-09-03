import { PiWarningBold } from "react-icons/pi";
import "./YellowNotification.css"
import { Link } from "react-router-dom";
import React from 'react'

const YellowNotification = ({ message }) => {
    return (
        <Link to="/justificativaFalta" className="yellow">
                <p>{message}</p>
                <div className="warning"> <PiWarningBold /> </div>
        </Link>
    )
}

export default YellowNotification
