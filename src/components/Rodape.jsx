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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Porto_2022.svg/1280px-Porto_2022.svg.png" alt="Logo Porto Seguro" />
        </div>
    </div>
</footer>
    )
}