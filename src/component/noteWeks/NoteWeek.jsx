import React, { useState } from 'react'
import './NoteWeek.css'
import NavBar from '../navBar/NavBar';
import MenuBar from '../menuBar/MenuBar';
import Modal from "../popUp/PopUp";

const NoteWeek = () => {
    const [note, setNote] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            <NavBar />
            <h1 className='h1Notes'>Anotações da Semana</h1>
            <div className="note-week">
                <textarea name="note"
                    placeholder='Descreve os acontecimentos'
                    onChange={(e) => setNote(e.target.value)}
                    value={note}></textarea>
                <p>As anotações que forem feitas aqui, serão encaminhadas para os profissionais um dia antes da sessão do praticante</p>
            </div>

            <div className='buttons'>
                <button>Cancelar</button>
                <button onClick={handleSubmit}>Salvar</button>
            </div>
            <MenuBar />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Anotação Salva!</h2>
                <p>Sua anotação foi salva com sucesso. Qualquer informação é de extrema importacia para
                    o bom andamento do tratamento.
                </p>
            </Modal>

        </div >
    )
}

export default NoteWeek