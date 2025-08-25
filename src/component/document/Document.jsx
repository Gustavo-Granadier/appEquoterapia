import MenuBar from "../menuBar/MenuBar";
import NavBar from "../navBar/NavBar";
import "./Document.css";
import NotSend from "./type/NotSend";
import Send from "./type/Send";
import SendMore from "./type/SendMore";

const documents = [
    { id: 1, name: "Certidão de nacimento", situation: "not" },
    { id: 2, name: "Laudo psicologico", situation: "send" },
    { id: 3, name: "Laudo médico", situation: "not" },
    { id: 4, name: "Documento 4", situation: "send" },
];

const Document = () => {
    return (
        <div>
            <NavBar />
            <div className="document-container">
                <div className="document-content">
                    <h1>Documentos</h1>
                    <div className="document-list">
                        {documents.map((document) => {
                            if (document.situation === "send") {
                                return <Send key={document.id} document={document.name} />;
                            } else if (document.situation === "not") {
                                return <NotSend key={document.id} document={document.name} />;
                            }
                        })}
                        <SendMore />
                    </div>
                    <p className="document-footer">Fim dos documentos</p>
                </div>
            </div>
            <MenuBar />
        </div>
    );
};

export default Document


