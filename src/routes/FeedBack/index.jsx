import React from "react";
import { guinchoTipos } from "../../components/TipoGuinchos"

export default function Feedback() {
    function handleClick(event) {
        event.preventDefault();
        alert("Feedback enviado com sucesso!");
    }

    return (
        <>
            <div class="tab-content">
                <h2>Feedback do Guincho</h2>
                <form id="feedbackForm" class="formulario">
                    <label for="ordemServico">Número da Ordem de Serviço:</label>
                    <input type="number" id="ordemServico" name="ordemServico" required />

                    <label for="guinchoAcertado">Qual foi o guincho utilizado (Acertado)?</label>
                    <select id="guinchoAcertado" name="guinchoAcertado">
                        {guinchoTipos.map((tipo) => (
                            <option value={tipo}>{tipo}</option>
                        ))}
                    </select>

                    <button type="submit"  onClick={handleClick}>Enviar Feedback</button>
                </form>
            </div>
        </>
    )
}