import MenuBar from "../menuBar/MenuBar";
import NavBar from "../navBar/NavBar";
import GreenNotification from "./GreenNotification";
import RedNotification from "./RedNotification";
import YellowNotification from "./YellowNotification";
import "./Notification.css";

const notifications = [
    { id: 1, massage: "justificativa de falta enviada com sucesso", type: "green" },
    { id: 2, massage: "Falta de documento", type: "red" },
    { id: 3, massage: "Justifique sua falta", type: "yellow" },
    { id: 4, massage: "justificativa de falta enviada com sucesso", type: "green" },
];

const Notification = () => {
    return (
        <div>
            <NavBar />
            <div className="notification-container">

                <div className="notification-content">
                    <h1>Notificações</h1>
                    <div className="notification-list">
                        {notifications.map((notification) => {
                            if (notification.type === "green") {
                                return <GreenNotification message={notification.massage} />;
                            } else if (notification.type === "yellow") {
                                return <YellowNotification message={notification.massage} />;
                            } else if (notification.type === "red") {
                                return <RedNotification message={notification.massage} />;
                            }
                            return null;
                        })}
                    </div>
                    <p className="notification-footer">Fim das notificações</p>
                </div>
                <MenuBar />
            </div>
        </div>
    );
};

export default Notification;
