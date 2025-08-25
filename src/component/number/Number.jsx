import MenuBar from "../menuBar/MenuBar"
import NavBar from "../navBar/NavBar"
import CardNumber from "./cards/CardNumber"
import "./Number.css"

const Number = () => {
    return (
        <div>
            <NavBar />
            <div className="numbers">
                <h1>Números de Apoio</h1>
                <h2>Aqui estão números de algumas pessoas que se disonibilizaram
                    a conversar e trocar experiencias
                </h2>
                <div className="numbers-container">
                    <CardNumber />
                    <CardNumber />
                    <CardNumber />
                    <CardNumber />
                    <CardNumber />

                </div>
            </div>
            <MenuBar />
        </div>
    )
}

export default Number