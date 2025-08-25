import MenuBar from "../menuBar/MenuBar";
import NavBar from "../navBar/NavBar";
import "./DocumentDownload.css";
import DownloadField from "./downloadField/DownloadField";

const documents = [
    { id: 1, name: "Documento 1" },
    { id: 2, name: "Comprovante de participação na equoterapia" },
    { id: 3, name: "Documento 2" },
    { id: 4, name: "Relatorio pedagogico" },
];

const DocumentDownload = () => {
    return (
        <div>
            <NavBar />
            <div className="download-container">

                <div className="download-content">
                    <h1>Documentos para download</h1>
                    <div className="download-list">
                        {documents.map((document) => (
                            <DownloadField key={document.id} document={document.name} />
                        ))}
                    </div>
                    <p className="download-footer">Fim das notificações</p>
                </div>
            </div>
            <MenuBar />
        </div>
    );
};

export default DocumentDownload;
