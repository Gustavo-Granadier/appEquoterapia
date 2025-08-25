import React, { useState } from "react";
import "./ReportRequest.css";
import NavBar from "../navBar/NavBar";
import MenuBar from "../menuBar/MenuBar";
import Modal from "../popUp/PopUp";

const ReportRequest = () => {
    const [request, setRequest] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = () => {
        setIsModalOpen(true);
        // Aqui você pode adicionar a lógica de envio do formulário
    };

    return (
        <div>
            <NavBar />
            <h1 className="h1Request">Requisição de Relatório</h1>
            <div className="report-request">


                <h3 className="h3Request">Quais relatórios deseja</h3>
                <div className="options">
                    <div className="option">Psicológico</div>
                    <div className="option">Fisioterapêutico</div>
                    <div className="option">Pedagógico</div>
                    <div className="option">Todos</div>
                </div>

                <h3 className="h3Request">Explique o motivo dessa solicitação</h3>
                <textarea
                    name="request"
                    placeholder="Explique aqui..."
                    onChange={(e) => setRequest(e.target.value)}
                    value={request}
                ></textarea>

                <p className="note-description">
                    Explicação necessária para a correta escrita do relatorio de acordo com a sua funcionalidade
                </p>

                <div className="buttons">
                    <button>Cancelar</button>
                    <button onClick={handleSubmit}>Enviar</button>
                </div>
            </div>
            <MenuBar />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Solicitação Enviada!</h2>
                <p>Você poderá solicitar o mesmo tipo de relatorio apenas apos 2 meses. 
                    Caso você precise de outro antes do prazo, entre em contato com a nossa equipe
                </p>
            </Modal>
        </div>
    );
};

export default ReportRequest;
