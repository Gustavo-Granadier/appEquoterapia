import { Link } from "react-router-dom";
import "./Send.css";

const Send = ({ document }) => {
    return (
        <div className="sendField">
            <p>{document}</p>
            <Link to="/visualizarDocumento" className="send">
                Visualizar
            </Link>
        </div>
    );
};

export default Send;
