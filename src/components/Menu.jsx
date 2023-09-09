import { Link } from 'react-router-dom';
export default function Menu() {
    return (
        <>
        <div class="menu">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/HAL9000.svg" alt="Logo Grupo HAL 9000"/>
        <h1>Grupo HAL 9000</h1>
        </div>
       <nav class="navbar">
            <Link to='/'>Classificação do Guincho</Link>
            <span> | </span>
            <Link to='/feedback'>Feedback do Guincho</Link>
            <span> | </span>
            <Link to='/historico'>Histórico de Atendimentos</Link>
            <span> | </span>
            <Link to='/membros'>Membros</Link>

       </nav>
       </>
    )
}