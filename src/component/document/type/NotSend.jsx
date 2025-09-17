import "./NotSend.css";
import "../../menuBar/MenuBar.css"
import { Link } from 'react-router-dom'
import { LuScanText } from "react-icons/lu";
import { TbPhoto } from "react-icons/tb";
import { PiFilesLight } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const NotSend = ({ document }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para abrir e fechar o menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="notSendField">
                <p>{document}</p>
                <button className="notSend" onClick={toggleMenu}>Enviar</button>
            </div>

            <div className={`bottom-menu ${isMenuOpen ? "show" : ""}`}>
                <button className="closeBtn" onClick={toggleMenu}>
                    <IoClose />
                </button>
                <div className="menu-options">
                    <Link to="/resquisicao" className="menuOption">
                        <div className="menuIcon"><LuScanText /></div>
                        <p>Escanear Documento</p>
                    </Link>

                    <Link to="/documento" className="menuOption">
                        <div className="menuIcon"><TbPhoto /></div>
                        <p>Galeria</p>
                    </Link>

                    <Link to="/downloadDocumento" className="menuOption">
                        <div className="menuIcon"><PiFilesLight /></div>
                        <p>Arquivos</p>
                    </Link>

                    <Link to="/listaAnotacoes" className="menuOption">
                        <div className="menuIcon"><GoPlus /></div>
                        <p>Outros</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotSend;
