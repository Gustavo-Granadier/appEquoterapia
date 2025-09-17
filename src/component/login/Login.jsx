import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react"
import "./Login.css"
import RecuperarSenha from "./RecuperarSenha";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showRecuperarSenha, setShowRecuperarSenha] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        return navigate("/home");
    }

    const forgetPassword = (event) => {
        event.preventDefault();
        setShowRecuperarSenha(true);
    };

    const backToLogin = () => {
        setShowRecuperarSenha(false);
    };

    if (showRecuperarSenha) {
        return <RecuperarSenha voltarParaLogin={backToLogin} user={userName} />
    }

    return (
        <div className="conteiner">
            <div className="imagem">
                <img src="logoMelhor.png" alt="Logo" />
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Equoterapia</h1>
                <div className="inputField">
                    <h3>Usuario:</h3>
                    <input
                        type="text"
                        placeholder="Usuario"
                        required
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="inputField">
                    <h3>Senha:</h3>
                    <input
                        type="password"
                        placeholder="Senha"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon" />
                </div>
                <div className="esqueceuSenha">
                    <a href="#" onClick={forgetPassword}>Esqueceu a senha?</a>
                </div>
                <button type="submit">Acessar</button>
            </form>
        </div>
    )
}

export default Login