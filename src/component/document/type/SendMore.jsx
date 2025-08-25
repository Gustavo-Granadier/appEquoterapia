import "./SendMore.css";
import { GoPlus } from "react-icons/go";

const SendMore = () => {
    return (
        <div className="sendMoreField">
            <p>Outros Documentos</p>
            <button className="sendMore">Adicionar <GoPlus /> </button>
        </div>
    );
};

export default SendMore;
