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

                <label for="estado">Estado:</label>
                <select id="estado" name="estado">
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>

                <label for="cidade">Cidade:</label>
                <input type="text" id="cidade" name="cidade" required/>

                <button type="submit" onclick="clicked(event)">Classificar</button>
            </form>
        </div>
    )
}