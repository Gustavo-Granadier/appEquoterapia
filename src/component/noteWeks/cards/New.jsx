import React from 'react'
import { GoPlus } from "react-icons/go";
import "./New.css";
import { Link } from "react-router-dom";

const New = () => {
    return (
        <div className="newField">
            <p>Nova Anotação</p>
            <Link to="/novaAnotacaoes" className="new">
                Adicionar <GoPlus />
            </Link>
        </div>
    );
};

export default New