import React from 'react'
import { GoPlus } from "react-icons/go";
import "./NewComlainSuggestion.css";
import { Link } from "react-router-dom";

const NewComlainSuggestion = () => {
    return (
        <div className="newComplainField">
            <p>Nova Reclamação/Sugestão</p>
            <Link to="/reclamacoesSugestoes" className="newComplain">
                Adicionar <GoPlus />
            </Link>
        </div>
    );
};

export default NewComlainSuggestion