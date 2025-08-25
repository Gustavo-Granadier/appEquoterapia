//import { GoArrowRight } from "react-icons/go";
import "./Message.css";

const Message = () => {
    return (
        <div className="messageBody">
            <p className="message">Lorem Ipsum is simply dummy text of the printing industry.</p>
            <div className="messageFooter">
                <p className="data">21 de julho</p>
                {/*<p className="seeMore">Ver mais <GoArrowRight className="moreIcon"/></p>*/}
            </div>
        </div>
    );
}

export default Message;
