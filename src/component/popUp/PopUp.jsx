import React from 'react';
import './PopUp.css';
import { Link } from "react-router-dom";

const PopUp = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="popUp-overlay">
            <div className="popUp-content">
                {children}
                <Link to="/home">
                    <button className="popUp-button" onClick={onClose}>OK</button>
                </Link>
            </div>
        </div>
    );
};

export default PopUp;