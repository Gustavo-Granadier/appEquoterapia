import { useState } from "react"
import "./RecuperarSenha.css"

const RecuperarSenha = ({ voltarParaLogin, user }) => {
    const [userName, setUserName] = useState(user ? user : "");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password === confirmPassword) {
            alert("Senha redefinida com sucesso para ");
            // Depois de redefinir a senha, voltamos para a tela de login
            voltarParaLogin && voltarParaLogin();
        } else {
            alert("Senhas não condizem");
        }

        voltarParaLogin();

    };

    return (
        <div className="conteiner">
            <div className="imagem">
                <img src="logoMelhor.png" alt="Logo" />
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Recuperação de Senha</h1>
                <div className="inputField">
                    <h3>Usuario:</h3>
                    <input
                        type="text"
                        value={userName}
                    />
                </div>
                <div className="inputField">
                    <h3>Senha:</h3>
                    <input
                        type="password"
                        placeholder="Digite sua senha nova"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="inputField">
                    <h3>Digite novamente a senha:</h3>
                    <input
                        type="password"
                        placeholder="Digite a senha novamente"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Definir</button>
            </form>
        </div>
    )
}

export default RecuperarSenha