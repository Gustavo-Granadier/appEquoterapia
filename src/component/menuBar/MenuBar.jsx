import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { BsDownload } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { GoStar } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Função para abrir e fechar o menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Barra inferior fixa */}
            <div className="menuBar">
                <div className="home">
                    <Link to="/home">
                        <RiHome2Line className="homeIcon" />
                    </Link>
                </div>

                <div className="menu" onClick={toggleMenu}>
                    <CiMenuBurger />
                </div>

                <div className="question">
                    <Link to="/faq">
                        <FaRegQuestionCircle className="questionIcon" />
                    </Link>
                </div>
            </div>

            {/* Menu de navegação*/}
            <div className={`bottom-menu ${isMenuOpen ? "show" : ""}`}>
                <button className="closeBtn" onClick={toggleMenu}>
                    <IoClose />
                </button>
                <div className="menu-options">
                    <Link to="/resquisicao" className="menuOption">
                        <div className="menuIcon"><LuClipboardList /></div>
                        <p>Requisição de Relatório</p>
                    </Link>

                    <Link to="/documento" className="menuOption">
                        <div className="menuIcon"><GrDocumentText /></div>
                        <p>Documentos</p>
                    </Link>

                    <Link to="/downloadDocumento" className="menuOption">
                        <div className="menuIcon"><BsDownload /></div>
                        <p>Documentos de Download</p>
                    </Link>

                    <Link to="/anotacaoes" className="menuOption">
                        <div className="menuIcon"><LuNotebookPen /></div>
                        <p>Anotações da Semana</p>
                    </Link>

                    {/*<Link to="" className="menuOption">
                        <div className="menuIcon"><CiCalendarDate /></div>
                        <p>Calendário</p>
                    </Link>*/}
                    <div className="ultimos">
                        <Link to="/telefones" className="menuOption">
                            <div className="menuIcon"><BsTelephone /></div>
                            <p>Telefones de Apoio</p>
                        </Link>

                        <Link to="/historias" className="menuOption">
                            <div className="menuIcon"><HiOutlineVideoCamera /></div>
                            <p>Histórias de Superação</p>
                        </Link>

                        <Link to="/reclamacoesSugestoes" className="menuOption">
                            <div className="menuIcon"><GoStar /></div>
                            <p>Avaliações e Sugestões</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuBar;
