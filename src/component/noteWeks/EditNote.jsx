import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../navBar/NavBar'
import MenuBar from '../menuBar/MenuBar'
import Modal from "../popUp/PopUp";
import './EditNote.css'

const EditNote = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [text, setText] = useState(`Data: 15/09/2025

Hoje preciso informar que o Lucas chegou em casa muito chateado. 
Ele me contou que teve uma briguinha com o amiguinho dele, o João, durante o recreio. Pelo que entendi, os dois queriam brincar com o mesmo brinquedo e acabaram se empurrando.
A professora separou eles na hora e conversou com os dois. O Lucas ficou muito arrependido e chorou quando chegou em casa. Já conversei com ele sobre dividir os brinquedos e resolver as coisas conversando, sem empurrar os amiguinhos.
Ele prometeu que vai pedir desculpas pro João amanhã. Também disse que vai tentar combinar com ele de revezarem o brinquedo, um pouco cada um.
Gostaria que vocês dessem uma atenção especial amanhã pra ver se eles fazem as pazes.`);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            <NavBar />
            <h1 className="h1EditNote">Editar Anotação</h1>
            <div className="editNote">
                <textarea
                    name="note"
                    value={text}
                    onChange={handleChange}
                ></textarea>
                <p>Lembre-se de salvar suas alterações!</p>
            </div>

            <div className="editNoteButtons5">
                <Link to="/listaAnotacoes" className="btn red5">Cancelar</Link>
                <Link onClick={handleSubmit} className="btn green5">Salvar</Link>
            </div>

            <MenuBar />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Alterações salvas com sucesso</h2>
                <p>Sua alteração foi salva com sucesso. Qualquer informação é de extrema importacia para
                    o bom andamento do tratamento.
                </p>
            </Modal>
        </div>
    )
}

export default EditNote