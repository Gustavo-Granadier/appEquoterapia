import "./WrittenNotes.css"
import NavBar from '../navBar/NavBar'
import MenuBar from '../menuBar/MenuBar'
import { Link } from 'react-router-dom'

const WrittenNotes1 = () => {
    const preWrittenText = `Data: 15/09/2025

Hoje preciso informar que o Lucas chegou em casa muito chateado. 
Ele me contou que teve uma briguinha com o amiguinho dele, o João, durante o recreio. Pelo que entendi, os dois queriam brincar com o mesmo brinquedo e acabaram se empurrando.
A professora separou eles na hora e conversou com os dois. O Lucas ficou muito arrependido e chorou quando chegou em casa. Já conversei com ele sobre dividir os brinquedos e resolver as coisas conversando, sem empurrar os amiguinhos.
Ele prometeu que vai pedir desculpas pro João amanhã. Também disse que vai tentar combinar com ele de revezarem o brinquedo, um pouco cada um.
Gostaria que vocês dessem uma atenção especial amanhã pra ver se eles fazem as pazes.`;

    return (
        <div>
            <NavBar />
            <h1 className="h1WrittenNotes">Anotação</h1>
            <div className="writtenNotes">
                <textarea
                    name="note"
                    value={preWrittenText}
                    readOnly
                ></textarea>
            </div>

            <div className="writtenNotesButtons">
                <Link to="/listaAnotacoes" className="btn blue">Voltar</Link>
                <Link to="/editarAnotacao" className="btn green">Editar</Link>
            </div>

            <MenuBar />
        </div>
    )
}

export default WrittenNotes1