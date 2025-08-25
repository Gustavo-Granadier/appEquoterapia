import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import "./FaqField.css";

const FaqField = ({ title, text }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="faqField-container">
            <div 
                className={`faqField ${isOpen ? "open" : ""}`} 
                onClick={() => setIsOpen(!isOpen)}
            >
                <p>{title}</p>
                <div className="faq-icon">
                    {isOpen ? <GoChevronUp /> : <GoChevronDown />}
                </div>
            </div>
            
            {isOpen && <div className="faq-content">{text}</div>}
        </div>
    );
};

export default FaqField;