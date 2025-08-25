import "./Send.css";

const Send = ({ document }) => {
    return (
        <div className="sendField">
            <p>{document}</p>
            <button className="send">Visualizar</button>
        </div>
    );
};

export default Send;
