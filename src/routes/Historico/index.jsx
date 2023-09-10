import React, { useState } from "react";
import { historico } from "../../components/HistoricoAtendimento";

export default function Historico() {
    function extrairMes(data) {
        const partes = data.split("-"); // Divide a data em partes usando o traço como separador
        return partes[1]; // A segunda parte corresponde ao mês
    }

    const [selectedMonth, setSelectedMonth] = useState("all");

    return (
        <div id="history" className="tab-content">
            <h2>Histórico de Atendimentos</h2>
            <div class="formulario">
                <label for="filterMonth">Filtrar por mês:</label>
                <select
                    id="filterMonth"
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    value={selectedMonth}
                >
                    <option value="all">Todos</option>
                    <option value="01">Janeiro</option>
                    <option value="02">Fevereiro</option>
                    <option value="03">Março</option>
                    <option value="04">Abril</option>
                    <option value="05">Maio</option>
                    <option value="06">Junho</option>
                    <option value="07">Julho</option>
                    <option value="08">Agosto</option>
                    <option value="09">Setembro</option>
                    <option value="10">Outubro</option>
                    <option value="11">Novembro</option>
                    <option value="12">Dezembro</option>
                </select>

                <label for="filterType">Filtrar por tipo de guincho:</label>
                <select id="filterType" onchange="filterData()">
                    <option value="guincho_pesado_nao_padrao">
                        GUINCHO PESADO NAO PADRAO
                    </option>
                    <option value="pesado_com_plat_hidraulica_munck">
                        PESADO COM PLAT HIDRAULICA MUNCK
                    </option>
                    <option value="pesado_com_plataforma_hidraulica">
                        PESADO COM PLATAFORMA HIDRAULICA
                    </option>
                    <option value="pesado_com_plataforma_hidraulica_e_band">
                        PESADO COM PLATAFORMA HIDRAULICA E BAND
                    </option>
                    <option value="pesado_com_quinta_roda_e_bandeja">
                        PESADO COM QUINTA RODA E BANDEJA
                    </option>
                    <option value="pesado_com_torre_e_lanca">
                        PESADO COM TORRE E LANCA
                    </option>
                    <option value="pesado_com_plataforma_hidraulica_2">
                        PESADO COM PLATAFORMA HIDRAULICA
                    </option>
                    <option value="pesado_com_plataforma_hidraulica_e_lanca">
                        PESADO COM PLATAFORMA HIDRAULICA E LANCA
                    </option>
                    <option value="pesado_com_quinta_roda_e_lanca">
                        PESADO COM QUINTA RODA E LANCA
                    </option>
                    <option value="tecnico_pesado_para_guincho_pesado">
                        TECNICO PESADO PARA GUINCHO PESADO
                    </option>
                </select>

                <div class="card-container">
                    <div class="card">
                        <h3>Total de Sucessos</h3>
                        <p id="totalSuccess">74</p>
                    </div>
                    <div class="card">
                        <h3>Proporção de Sucesso (%)</h3>
                        <p id="successRatio">55</p>
                    </div>
                    <div class="card">
                        <h3>Valor (R$)</h3>
                        <p id="totalValue">89</p>
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
                        {historico
                            .filter(
                                (atendimento) =>
                                    selectedMonth === "all" ||
                                    extrairMes(atendimento.data) ===
                                        selectedMonth
                            )
                            .map((atendimento) => (
                                <tr key={atendimento.ordemServico}>
                                    <td>{atendimento.ordemServico}</td>
                                    <td>{atendimento.data}</td>
                                    <td>{atendimento.local}</td>
                                    <td>{atendimento.descricao}</td>
                                    <td>{atendimento.status}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>

                <div id="aggregatedData"></div>
            </div>
        </div>
    );
}
