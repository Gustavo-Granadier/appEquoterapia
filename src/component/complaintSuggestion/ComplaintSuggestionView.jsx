import React from 'react'
import './ComplaintSuggestionView.css'
import NavBar from '../navBar/NavBar'
import MenuBar from '../menuBar/MenuBar'
import { Link } from 'react-router-dom'

const ComplaintSuggestionView = () => {

    const userComplaint = `Data: 15/09/2025

Gostaria de sugerir que houvesse mais horários disponíveis para atendimento no período da tarde. Tenho percebido que está difícil conseguir encaixar os horários com minha rotina de trabalho.

Além disso, seria interessante ter um espaço coberto maior para os dias de chuva, pois às vezes as sessões precisam ser canceladas devido ao tempo.

Agradeço a atenção.`;

    const professionalResponse = `Data da resposta: 16/09/2025

Prezado(a),

Agradecemos suas sugestões. Informamos que já estamos estudando a possibilidade de ampliar os horários de atendimento no período da tarde a partir do próximo mês.

Quanto ao espaço coberto, temos um projeto em andamento para construção de uma nova área coberta, com previsão de conclusão até o final deste ano.

Atenciosamente,
Equipe Equoterapia`;

    return (
        <div>
            <NavBar />
            <h1 className='h1ComplaintView'>Reclamações e Sugestões</h1>

            <div className="complaintSuggestionView">
                <div className="messageContainer">
                    <h3 className="messageLabel">Reclamação/Sugestão:</h3>
                    <textarea
                        className="userMessage"
                        value={userComplaint}
                        readOnly
                    ></textarea>
                </div>

                <div className="messageContainer">
                    <h3 className="messageLabel">Resposta da Equipe:</h3>
                    <textarea
                        className="responseMessage"
                        value={professionalResponse}
                        readOnly
                    ></textarea>
                </div>
            </div>

            <div className='complaintSuggestionViewButtons'>
                <Link to="/home" className="red">Fechar</Link>
                <Link to="/listaAnotacoesEditarAnotacao" className="blue">Voltar</Link>
            </div>

            <MenuBar />
        </div>
    )
}

export default ComplaintSuggestionView