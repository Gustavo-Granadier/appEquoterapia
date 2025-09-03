import React, { useState } from "react";
import "./PainelAnexos.css";
import Anexo from "./anexo/Anexo1";
import NovoAnexo from "./novoAnexo/NovoAnexo1";

const PainelAnexos = ({ initialCount = 1 }) => {
    const MAX_ANEXOS = 2;
    const safeInitialCount = Math.min(initialCount, MAX_ANEXOS);

    const [items, setItems] = useState(
        Array.from({ length: safeInitialCount }, (_, i) => ({ id: i + 1 }))
    );

    const addItem = () => {
        if (items.length < MAX_ANEXOS) {
            setItems(prev => [...prev, { id: Date.now() }]);
        }
    };

    const removeItem = (id) => setItems(prev => prev.filter(it => it.id !== id));

    return (
        <div
            className="attachmentsPanel-frame"
            role="region"
            aria-label="Anexos"
        >
            <div className="attachmentsPanel-track">
                {items.map((item, index) => (
                    <div key={item.id} className="attachmentRow">
                        <Anexo
                            onRemove={() => removeItem(item.id)}
                            label={`Anexo ${index + 1}`}
                        />
                    </div>
                ))}
                {items.length < MAX_ANEXOS && (
                    <div className="attachmentRow">
                        <NovoAnexo onAdd={addItem} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PainelAnexos;