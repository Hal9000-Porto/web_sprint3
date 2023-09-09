import { Link } from "react-router-dom";

export default function Rodape() {
    return (
<footer>
    <div class="footer-content">
        <div class="footer-links">
            <div class="footer-links-title">
                <a href="/">Link 1</a>
            </div>
            <div class="footer-links-title">
                <a href="/">Link 2</a>
            </div>
            <div class="footer-links-title">
                <a href="/">Link 3</a>
            </div>
            <div class="footer-links-title">
                <a href="/">Link 4</a>
            </div>
        </div>
        <div class="footer-center">
            <p>Copyright © 2023 de Grupo Hall 9000</p>
        </div>

        <div class="footer-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/HAL9000.svg" alt="Logo Grupo HAL 9000"/>
         
        </div>
    </div>
</footer>
    )
}