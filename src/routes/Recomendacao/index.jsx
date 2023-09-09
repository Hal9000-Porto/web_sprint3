export default function Recomendacao() {
    return (
        <div id="classification" class="tab-content">
            <h2>Classificação do Guincho</h2>
            <form id="classificationForm" class="formulario">
                <label for="numeroOS">Número da OS:</label>
                <input type="number" id="numeroOS" name="numeroOS" required/>

                <label for="dataChamado">Data do Atendimento:</label>
                <input type="date" id="dataChamado" name="dataChamado" required/>

                <label for="idSegurado">CPF do Segurado:</label>
                <input type="text" id="idSegurado" name="idSegurado" required/>

                <label for="marcaCaminhao">Marca do Caminhão:</label>
                <select id="marcaCaminhao" name="marcaCaminhao">
                        <option value="DAF">DAF</option>
                        <option value="Ford">Ford</option>
                        <option value="Iveco">Iveco</option>
                        <option value="Mercedez">Mercedes</option>
                        <option value="Scania">Scania</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Volvo">Volkswagen</option>
                        <option value="Volvo">MAN</option>
                        <option value="Volvo">Hyundai</option>
                </select>

                <label for="cargaCaminhao">Carga do Caminhão (em kilos):</label>
                <input type="number" id="cargaCaminhao" name="cargaCaminhao" required/>

                <label for="taraCaminhao">Tara do Caminhão (em kilos):</label>
                <input type="number" id="taraCaminhao" name="taraCaminhao" required/>

                <label for="tamanhoCaminhao">Tamanho do Caminhão (em kilos):</label>
                <input type="number" id="tamanhoCaminhao" name="tamanhoCaminhao" required/>

                <label for="tipoEngate">Tipo de Engate:</label>
                <select id="tipoEngate" name="tipoEngate">
                    <option value="Engate de roda">Engate de roda</option>
                    <option value="Engate de pescoço de ganso">Engate de pescoço de ganso</option>
                    <option value="Engate do receptor">Engate do receptor</option>
                    <option value="Engate de distribuição de peso">Engate de distribuição de peso</option>
                    <option value="Engate de para-choques">Engate de para-choques</option>
                    <option value="Engate de RV">Engate de RV</option>
                    <option value="Engate Multi-Fit">Engate Multi-Fit</option>
                </select>

                <label for="complexidadeAtendimento">Complexidade do Atendimento:</label>
                <select id="complexidadeAtendimento" name="complexidadeAtendimento">
                    <option value="Caminhão tombado">Caminhão tombado</option>
                    <option value="Local de difícil acesso">Local de difícil acesso</option>
                    <option value="Eixo quebrado">Eixo quebrado</option>
                    <option value="Roda travada">Roda travada</option>
                </select>

                <label for="taraCaminhao">Tara do Caminhão (em kilos):</label>
                <input type="number" id="taraCaminhao" name="taraCaminhao" required/>
                
                <label for="imagem">Incluir Imagem:</label>
                <input type="file" id="imagem" name="imagem" accept="image/*"/>

                <button type="submit" onclick="clicked(event)">Classificar</button>
            </form>
        </div>
    )
}