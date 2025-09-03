
import React, { useState } from 'react'

/*Importe Do CSS */
import './JustificativaFalta.css'

/*Import Da Barra De Menu e Navegação */
import NavBar from '../navBar/NavBar';
import MenuBar from '../menuBar/MenuBar';

import Modal from "../popUp/PopUp";
import PainelAnexos from './PainelAnexos';

const JustificativaFalta1 = () => {
    const [text, settext] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = () => {
        setIsModalOpen(true);

    };

    return (
        <div>
            <NavBar />
            <div>
                <NavBar />
                <h1 className='h1Justificativa'>Justificativa de Falta</h1>
                 
                <div className="noteJustificativa">
                    <h3 className="h3Justificativa">Escreva o motivo da falta</h3>
                    <textarea name="note"
                        onChange={(e) => settext(e.target.value)}
                        value={text}></textarea>
                </div>

                <div className='fieldAnexoJustificativa'>
                    <h3 className="h3Justificativa">Anexar Comprovante</h3>
                    <div className="anexoJustificativa">
                        <PainelAnexos initialCount={0} />

                    </div>
                </div>

                <div className='buttons'>
                    <button>Cancelar</button>
                    <button onClick={handleSubmit}>Enviar</button>
                </div>

            </div >
            <MenuBar />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Justificativa Enviada!</h2>
                <p>Para o bom andamento das atividades, pedimos que evite faltas desnecessárias.
                    Caso precise faltar, por favor, envie sua justificativa.
                </p>
            </Modal>

        </div>
    )
}

export default JustificativaFalta1