import { Link } from 'react-router-dom';
export default function Menu() {
    return (
        <>
        <div class="menu">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Porto_2022.svg/1280px-Porto_2022.svg.png" alt="Logo Porto Seguro" />
        <h1>Guincho Adviser</h1>
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