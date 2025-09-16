import React from 'react'
import { Link } from 'react-router-dom'
import "./SendComplainSuggestion.css"

const SendComplainSuggestion = ({ message }) => {
    return (
        <div className="sendComplainField">
            <p>{message}</p>
            <Link to="/vizualisacaoReclamacaoSugestao" className="sendComplain">
                Ver
            </Link>
        </div>
    )
}

export default SendComplainSuggestion