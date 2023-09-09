import { Link } from "react-router-dom"

export default function Login() {
    return (
        <container class="login">
        <div class="login-card">
            <h2>Login</h2>
            <form>
                <div class="login-inputs">
                    <label for="username">Usuário:</label>
                    <input type="text" id="username" name="username" required/>
                </div>
                <div class="login-inputs">
                    <label for="password">Senha:</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <Link to="/"><button type="submit">Entrar</button></Link>
            </form>
        </div>
    </container>
    )
}