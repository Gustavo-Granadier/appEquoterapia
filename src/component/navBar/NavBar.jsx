//Importação de icones
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

//estilização
import "./NavBar.css"

const NavBar = () => {

    return (
        <div className="navBar">
            <div className="logo">
                <img src="logoMelhor.png" alt="" />
            </div>

            <div className="iconsNot">
                <div className="notificacao">
                    <button>
                        <Link to={"/notification"}>
                            <IoMdNotificationsOutline className="notificationIcon" />
                        </Link>
                    </button>
                </div>

                <div className="profile">
                    <GoPerson className="profileIcon" />
                </div>
            </div>
        </div>
    )
}

export default NavBar