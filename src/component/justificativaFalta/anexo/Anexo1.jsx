import React from "react";
import "./Anexo.css";

const Anexo1 = ({ onRemove, label = "Anexo" }) => {
    return (
        <div className="fieldAnexo">
            <p>{label}</p>
            <button type="button" className="anexo" onClick={onRemove}>
                Remover
            </button>
        </div>
    );
};

export default Anexo1;
