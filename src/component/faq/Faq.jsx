import { useState } from "react";
import { GoHome, GoQuestion, GoList, GoBell, GoPerson } from "react-icons/go";
import FaqField from "./FaqField";
import "./Faq.css";
import NavBar from "../navBar/NavBar";
import MenuBar from "../menuBar/MenuBar";

const Faq = () => {
    // Dados das perguntas
    const faqItems = [
        {
            id: 1,
            title: "Como a equoterapia funciona",
            text: "A equoterapia é um método terapêutico que utiliza o cavalo para promover ganhos físicos, psicológicos e sociais. O movimento tridimensional do cavalo estimula múltiplos sistemas corporais simultaneamente."
        },
        {
            id: 2,
            title: "Quais roupas usar nas sessões",
            text: "Recomenda-se o uso de roupas confortáveis, calça comprida (preferencialmente legging ou jeans flexível), tênis ou bota e capacete (fornecido pelo centro de equoterapia)."
        },
        {
            id: 3,
            title: "Pergunta",
            text: "Resposta para a pergunta 3."
        },
        {
            id: 4,
            title: "Pergunta",
            text: "Resposta para a pergunta 4."
        },
        {
            id: 5,
            title: "Pergunta",
            text: "Resposta para a pergunta 5."
        },
    ];

    return (
        <div>
            <NavBar />
            <div className="faq-container">
                <div className="faq-body">
                    <h1 className="faq-title">Perguntas frequentes e dicas</h1>

                    <div className="faq-list">
                        {faqItems.map((item) => (
                            <FaqField
                                key={item.id}
                                title={item.title}
                                text={item.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <MenuBar />
        </div>
    );
};

export default Faq;