import React, { useState } from "react";
import { historico } from "../../components/HistoricoAtendimento";

export default function Historico() {
    function extrairMes(data) {
        const partes = data.split("-");
        return partes[1];
    }

    const [selectedMonth, setSelectedMonth] = useState("all");
    const [selectedType, setSelectedType] = useState("all");

    return (
        <div id="history" className="tab-content">
            <h2>Histórico de Atendimentos</h2>
            <div className="formulario">
                <label htmlFor="filterMonth">Filtrar por mês:</label>
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

                <label htmlFor="filterType">Filtrar por tipo de guincho:</label>
                <select
                    id="filterType"
                    onChange={(e) => setSelectedType(e.target.value)}
                    value={selectedType}
                >
                    <option value="all">Todos</option>
                    <option value="GUINCHO PESADO NAO PADRAO">
                        GUINCHO PESADO NAO PADRAO
                    </option>
                    <option value="PESADO COM PLAT HIDRAULICA MUNCK">
                        PESADO COM PLAT HIDRAULICA MUNCK
                    </option>
                    <option value="PESADO COM PLATAFORMA HIDRAULICA">
                        PESADO COM PLATAFORMA HIDRAULICA
                    </option>
                    <option value="PESADO COM PLATAFORMA HIDRAULICA E BAND">
                        PESADO COM PLATAFORMA HIDRAULICA E BAND
                    </option>
                    <option value="PESADO COM QUINTA RODA E BANDEJA">
                        PESADO COM QUINTA RODA E BANDEJA
                    </option>
                    <option value="PESADO COM TORRE E LANCA">
                        PESADO COM TORRE E LANCA
                    </option>
                    <option value="PESADO COM PLATAFORMA HIDRAULICA E LANCA">
                        PESADO COM PLATAFORMA HIDRAULICA E LANCA
                    </option>
                    <option value="PESADO COM QUINTA RODA E LANCA">
                        PESADO COM QUINTA RODA E LANCA
                    </option>
                    <option value="TECNICO PESADO PARA GUINCHO PESADO">
                        TECNICO PESADO PARA GUINCHO PESADO
                    </option>
                </select>

                <div className="card-container">
                    <div className="card">
                        <h3>Total de Sucessos</h3>
                        <p id="totalSuccess">74</p>
                    </div>
                    <div className="card">
                        <h3>Proporção de Sucesso (%)</h3>
                        <p id="successRatio">55</p>
                    </div>
                    <div className="card">
                        <h3>Valor (R$)</h3>
                        <p id="totalValue">89</p>
                    </div>
                </div>

                <table id="historyTable">
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
                                    (selectedMonth === "all" || extrairMes(atendimento.data) === selectedMonth)
                            )
                            .map((atendimento) => (
                                <tr key={atendimento.ordemServico}>
                                    <td>{atendimento.ordemServico}</td>
                                    <td>{atendimento.data}</td>
                                    <td>{atendimento.local}</td>
                                    <td>{atendimento.descrição}</td>
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
