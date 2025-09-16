import React from 'react'
import "./Send.css";
import { Link } from 'react-router-dom'

const Send = ({ note }) => {
    return (
        <div className="sendNoteField">
            <p>{note}</p>

            <Link to="/anotacoesEcritas" className="sendNote">
                Visualizar
            </Link>
        </div>
    );
}

export default Send