import "./NotSend.css";

const NotSend = ({ document }) => {
    return (
        <div className="notSendField">
            <p>{document}</p>
            <button className="notSend">Enviar</button>
        </div>
    );
};

export default NotSend;
