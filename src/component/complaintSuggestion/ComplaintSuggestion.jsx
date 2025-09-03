import React, { useState } from 'react'

/*Importe Do CSS */
import './ComplaintSuggestion.css'

/*Import Da Barra De Menu e Navegação */
import NavBar from '../navBar/NavBar';
import MenuBar from '../menuBar/MenuBar';

import Modal from "../popUp/PopUp";

const ComplaintSuggestion = () => {
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
                <h1 className='h1Comlaiment'>Reclamações e Sugestões</h1>
                <div className="noteField">
                    <textarea name="note"
                        placeholder="Escreva aqui sua sugestão ou reclamação..."
                        onChange={(e) => settext(e.target.value)}
                        value={text}></textarea>
                    
                    <p>Tudo que for escrito será enviao de forma anônima e apenas os profissionais da equoterapia terão acesso as mensagens. E serão utilizadas para o aprimoramento de nosso serviço</p>
                </div>

                <div className='buttons'>
                    <button>Cancelar</button>
                    <button onClick={handleSubmit}>Enviar</button>
                </div>

            </div >
            <MenuBar />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Sugestão Enviada!</h2>
                <p>Sua sugestão foi enviada com sucesso. Agradecemos por contribuir para a melhoria do nosso serviço.
                    Caso tenha mais sugestões, fique à vontade para entrar em contato novamente.
                </p>
            </Modal>

        </div>
    )
}

export default ComplaintSuggestion