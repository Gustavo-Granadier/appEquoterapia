import CancelIcon from "./homeIcons/cancelIcon/CancelIcon";
import ConfirmIcon from "./homeIcons/confirmIccon/ConfirmIcon";
import HolidayIcon from "./homeIcons/holidayIcon/HolidayIcon";
import Missjustified from "./homeIcons/missJustified1/Missjustified";
import MissUrgency from "./homeIcons/missUrgency/MissUrgency";
import MissWarning from "./homeIcons/missWarning/MissWarning";
import RainIcon from "./homeIcons/rainIcon/RainIcon";
import "./Home.css";
import SessionsBoard from "./sessionsBoard/SessionsBoard";
import Message from "./message/Message";
import NavBar from "../navBar/NavBar";
import MenuBar from "../menuBar/MenuBar";

const months = [
  {
    id: 1,
    month: "Janeiro",
    sessions: [
      { id: 1, date: "6", time: "16:00" },
      { id: 2, date: "7", time: "16:00" },
      { id: 3, date: "8", time: "16:00" },
      { id: 4, date: "9", time: "16:00" }
    ]
  },
  {
    id: 2,
    month: "Fevereiro",
    sessions: [
      { id: 1, date: "10", time: "16:00" },
      { id: 2, date: "11", time: "16:00" },
      { id: 3, date: "12", time: "16:00" }
    ]
  },
  {
    id: 3,
    month: "Março",
    sessions: [
      { id: 1, date: "13", time: "16:00" },
      { id: 2, date: "14", time: "16:00" },
      { id: 3, date: "15", time: "16:00" },
      { id: 4, date: "16", time: "16:00" }
    ]
  },
  {
    id: 4,
    month: "Abril",
    sessions: [
      { id: 1, date: "15", time: "16:00" },
      { id: 2, date: "16", time: "16:00" },
      { id: 3, date: "17", time: "16:00" },
      { id: 4, date: "18", time: "16:00" }
    ]
  },
  {
    id: 5,
    month: "Maio",
    sessions: [
      { id: 1, date: "15", time: "16:00" },
      { id: 2, date: "16", time: "16:00" },
      { id: 3, date: "17", time: "16:00" },
      { id: 4, date: "18", time: "16:00" }
    ]
  },
  {
    id: 6,
    month: "Junho",
    sessions: [
      { id: 1, date: "15", time: "16:00" },
      { id: 2, date: "16", time: "16:00" },
      { id: 3, date: "17", time: "16:00" },
      { id: 4, date: "18", time: "16:00" }
    ]
  },
  {
    id: 7,
    month: "Julho",
    sessions: [
      { id: 1, date: "15", time: "16:00" },
      { id: 2, date: "16", time: "16:00" },
      { id: 3, date: "17", time: "16:00" },
      { id: 4, date: "18", time: "16:00" }
    ]
  },
  {
    id: 8,
    month: "Agosto",
    sessions: [
      { id: 1, date: "15", time: "16:00" },
      { id: 2, date: "16", time: "16:00" },
      { id: 3, date: "17", time: "16:00" },
      { id: 4, date: "18", time: "16:00" }
    ]
  },
  {
    id: 9,
    month: "Setembro",
    sessions: [
      { id: 1, date: "15", time: "16:00" },
      { id: 2, date: "16", time: "16:00" },
      { id: 3, date: "17", time: "16:00" },
      { id: 4, date: "18", time: "16:00" }
    ]
  },
  {
    id: 10,
    month: "Outubro",
    sessions: [
      { id: 1, date: "15", time: "16:00" },
      { id: 2, date: "16", time: "16:00" },
      { id: 3, date: "17", time: "16:00" },
      { id: 4, date: "18", time: "16:00" }
    ]
  },
  {
    id: 11,
    month: "Novembro",
    sessions: [
      { id: 1, date: "15", time: "16:00" },
      { id: 2, date: "16", time: "16:00" },
      { id: 3, date: "17", time: "16:00" },
      { id: 4, date: "18", time: "16:00" }
    ]
  },
  {
    id: 12,
    month: "Dezembro",
    sessions: [
      { id: 1, date: "15", time: "16:00" },
      { id: 2, date: "16", time: "16:00" },
      { id: 3, date: "17", time: "16:00" },
      { id: 4, date: "18", time: "16:00" }
    ]
  }
];

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="sessionsBord">
          <h2 className="h2Home">Proximas sessões</h2>
          <div className="sessionBord">
            <SessionsBoard months={months} />
          </div>
        </div>
        <div className="legend-box">
          <h3 className="legend-title">Legenda</h3>
          <div className="legend-grid">
            <div className="legend-item">
              <span className="icon-wrapper"><ConfirmIcon /></span>
              <span className="legend-text">Sessão confirmada</span>
            </div>
            <div className="legend-item">
              <span className="icon-wrapper"><CancelIcon /></span>
              <span className="legend-text">Sessão cancelada</span>
            </div>
            <div className="legend-item">
              <span className="icon-wrapper"><HolidayIcon /></span>
              <span className="legend-text">Feriado</span>
            </div>
            <div className="legend-item">
              <span className="icon-wrapper"><RainIcon /></span>
              <span className="legend-text">Sessão cancelada por previsão de chuva</span>
            </div>
            <div className="legend-item">
              <span className="icon-wrapper"><Missjustified /></span>
              <span className="legend-text">Falta justificada</span>
            </div>
            <div className="legend-item">
              <span className="icon-wrapper"><MissWarning /></span>
              <span className="legend-text">Justifique sua falta</span>
            </div>
            <div className="legend-item">
              <span className="icon-wrapper"><MissUrgency /></span>
              <span className="legend-text">Falta não justificada</span>
            </div>
          </div>
        </div>
        <div className="noticeBord">
          <h2 className="h2Home">Avisos</h2>
          <Message />

        </div>
      </div>
      <MenuBar />
    </div>
  );
};

export default Home;