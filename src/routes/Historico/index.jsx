import { historico } from "../../components/HistoricoAtendimento"

export default function Historico() {
    return (

        <div id="history" class="tab-content" >
        <h2>Histórico de Atendimentos</h2>
        <div class="formulario">
        <label for="filterMonth">Filtrar por mês:</label>
        <select id="filterMonth" onchange="filterData()">
            <option value="all">Todos</option>
            <option value="jan">Janeiro</option>
            <option value="feb">Fevereiro</option>
            <option value="mar">Março</option>
            <option value="apr">Abril</option>
            <option value="may">Maio</option>
            <option value="jun">Junho</option>
            <option value="jul">Julho</option>
            <option value="aug">Agosto</option>
            <option value="sep">Setembro</option>
            <option value="oct">Outubro</option>
            <option value="nov">Novembro</option>
            <option value="dec">Dezembro</option>
        </select>

        <label for="filterType">Filtrar por tipo de guincho:</label>
        <select id="filterType" onchange="filterData()">
            <option value="guincho_pesado_nao_padrao">GUINCHO PESADO NAO PADRAO</option>
            <option value="pesado_com_plat_hidraulica_munck">PESADO COM PLAT HIDRAULICA MUNCK</option>
            <option value="pesado_com_plataforma_hidraulica">PESADO COM PLATAFORMA HIDRAULICA</option>
            <option value="pesado_com_plataforma_hidraulica_e_band">PESADO COM PLATAFORMA HIDRAULICA E BAND</option>
            <option value="pesado_com_quinta_roda_e_bandeja">PESADO COM QUINTA RODA E BANDEJA</option>
            <option value="pesado_com_torre_e_lanca">PESADO COM TORRE E LANCA</option>
            <option value="pesado_com_plataforma_hidraulica_2">PESADO COM PLATAFORMA HIDRAULICA</option>
            <option value="pesado_com_plataforma_hidraulica_e_lanca">PESADO COM PLATAFORMA HIDRAULICA E LANCA</option>
            <option value="pesado_com_quinta_roda_e_lanca">PESADO COM QUINTA RODA E LANCA</option>
            <option value="tecnico_pesado_para_guincho_pesado">TECNICO PESADO PARA GUINCHO PESADO</option>
        </select>




        <div class="card-container">
            <div class="card">
                <h3>Total de Sucessos</h3>
                <p id="totalSuccess">0</p>
            </div>
            <div class="card">
                <h3>Proporção de Sucesso (%)</h3>
                <p id="successRatio">0</p>
            </div>
            <div class="card">
                <h3>Valor (R$)</h3>
                <p id="totalValue">0</p>
            </div>
        </div>
        
        
        <table id="historyTable">
         {/*   <!-- Conteúdo da tabela será gerado pelo JavaScript -->*/} 
         <thead>
            <tr>
                <th>Ordem de Serviço</th>
                <th>Data</th>
                <th>Localização</th>
                <th>Tipo de Guincho</th>
                <th>Acerto/Erro</th>
            </tr>
         </thead>
         <tbody>
            {historico.map((atendimento) => (
                <tr>
                    <td>{atendimento.ordemServico}</td>
                    <td>{atendimento.data}</td>
                    <td>{atendimento.local}</td>
                    <td>{atendimento.descrição}</td>
                    <td>{atendimento.status}</td>
                </tr>
            ))}
         </tbody>
        </table>


        <div id="aggregatedData">
           {/* <!-- Dados agregados serão gerados pelo JavaScript -->*/} 
        </div>
        </div>
    </div>

    )
}