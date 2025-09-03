import React from "react";
import "./NovoAnexo.css";
import { GoPlus } from "react-icons/go";

const NovoAnexo1 = ({ onAdd }) => {
    return (
        <div className="fieldNovoAnexo">
            <p>Novo Anexo</p>
            <button type="button" className="novoAnexo" onClick={onAdd}>
                Adicionar <GoPlus />
            </button>
        </div>
    );
};

export default NovoAnexo1;
