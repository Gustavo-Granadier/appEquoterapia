import React from 'react'
import NavBar from '../navBar/NavBar'
import MenuBar from '../menuBar/MenuBar'
import './ViewDocument.css'
import { Link } from 'react-router-dom'

const ViewDocument = () => {
    return (
        <div className="viewDocument">
            <NavBar />
            <h1 className="h1View">Visualizador de Documento</h1>
            <div className="viewContainer">
                <img src="documento_vazio.png" alt="docs" />
            </div>

            <div className='documentViewButtons'>
                <Link to="/documento" className="blue">Voltar</Link>
                <Link to="/home" className="green">Baixar</Link>
            </div>
            <MenuBar />
        </div>
    )
}

export default ViewDocument