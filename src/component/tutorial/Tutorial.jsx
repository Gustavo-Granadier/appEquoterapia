//Estilo
import "./Tutorial.css"

import { useState } from "react";

//Import de icones
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

//Iport do react router para navegação
import { useNavigate } from "react-router-dom";

const slides = [
    {
        id: 1,
        title: "Bem-vindo(a)!",
        text: "Este app aproxima você da equipe de equoterapia para acompanhar o tratamento e fortalecer a participação da família."
    },
    {
        id: 2,
        title: "Nunca mais perca uma sessão",
        text: "Veja datas futuras, faltas e cancelamentos em um só lugar. Ative lembretes e notificações para manter tudo em dia."
    },
    {
        id: 3,
        title: "Tudo organizado em um só lugar",
        text: "Solicite e baixe relatórios de evolução, declarações de comparecimento e outros documentos diretamente pelo aplicativo."
    },
    {
        id: 4,
        title: "Você não está sozinho(a)",
        text: "Compartilhe histórias, troque experiências e receba apoio de outras famílias que também participam da equoterapia."
    },
    {
        id: 5,
        title: "Vamos começar!",
        text: "Tudo pronto! Vamos iniciar sua jornada."
    }

];




const Tutorial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [aux, setAux] = useState(1);
    const navigate = useNavigate();

    const goNext = () => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }

        if (aux === 5) {
            return navigate("/home");
        }

        setAux(aux + 1);

    };

    const goBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }

        setAux(aux - 1);

        if (aux <= 0) {
            setAux(1);
        }
    };

    return (
        <div className="conteinerTutorial">
            <div className="imagem">
                <GoArrowLeft className="goBack" onClick={goBack} />
                <img src="logoMelhor.png" alt="Logo" />
            </div>
            <div className="baixo">
                <div className="progressao">
                    {slides.map((_, index) => (
                        <div key={index} className="progressaoItem">
                            <div className={`progressaoBarra ${index === currentIndex ? "active" : ""}`}></div>
                        </div>
                    ))}
                </div>

                <h1>{slides[currentIndex].title}</h1>
                <p>{slides[currentIndex].text}</p>


                <button onClick={goNext}>
                    <GoArrowRight className="next" />
                </button>

            </div>

        </div>
    )
}

export default Tutorial