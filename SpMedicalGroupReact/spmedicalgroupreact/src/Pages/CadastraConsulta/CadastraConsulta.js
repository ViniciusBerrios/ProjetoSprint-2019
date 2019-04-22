import React, { Component } from 'react';
import fundo2 from '../../Assets/img/fundo2novo.jpg';
import '../../Assets/css/agendamento.css';
import Topo from '../../components/Topo/topo';

export default class CadastraConsulta extends Component {

    constructor() {
        super();

        this.state = {
            idProntuario: '',
            idMedico: '',
            dataConsulta: '',
            idSituacao: '',
            descricao: ''
        }

        this.atualizaEstadoProntuarioForm = this.atualizaEstadoProntuario.bind(this);
        this.atualizaEstadoMedicoForm = this.atualizaEstadoMedico.bind(this);
        this.atualizaEstadoDataConsultaForm = this.atualizaEstadoDataConsulta.bind(this);
        this.atualizaEstadoSituacaoForm = this.atualizaEstadoSituacao.bind(this);
        this.atualizaEstadoDescricaoForm = this.atualizaEstadoDescricao.bind(this);
    }

    atualizaEstadoProntuario(event) {
        this.setState({ idProntuario: event.target.value });
    }

    atualizaEstadoMedico(event) {
        this.setState({ idMedico: event.target.value });
    }

    atualizaEstadoDataConsulta(event) {
        this.setState({ dataConsulta: event.target.value });
    }

    atualizaEstadoSituacao(event) {
        this.setState({ idSituacao: event.target.value });
    }

    atualizaEstadoDescricao(event) {
        this.setState({ descricao: event.target.value });
    }

    cadastrarConsulta(event) {
        event.preventDefault();
        let token = localStorage.getItem("Sprint2Projeto");

        fetch('http://localhost:5000/api/Consultas', {
            method: 'POST',
            body: JSON.stringify({
                idProntuario: this.state.idProntuario,
                idMedico: this.state.idMedico,
                dataConsulta: this.setState.dataConsulta,
                idSituacao: this.state.idSituacao,
                descricao: this.state.descricao
            }),
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(response => console.log(response))
            .catch(erro => console.log(erro))
    }

    render() {
        return (

            <div>

                <Topo />

                <section className="formulario">
                    <div className="fundo2">
                        <img src={fundo2} alt="fundo2 spmedical"></img>
                        <h3>Formulario de Agendamento</h3>
                    </div>

                    <div className="quadrado5">
                        <h4>Atendimento</h4>

                        <form onSubmit={this.cadastrarConsulta.bind(this)}>
                            <div className="prontuarioInput">
                                <label>Prontuário</label>
                                <input id="prontuario" type="text" value={this.state.idProntuario} onChange={this.atualizaEstadoProntuarioForm} placeholder="Prontuário" />
                            </div>

                            <div className="medicoInput">
                                <label>Médicos</label>
                                <input id="medico" type="text" value={this.state.idMedico} onChange={this.atualizaEstadoMedicoForm} placeholder="Médico" />
                            </div>

                            <div className="dataInput">
                                <label>Data Consulta</label>
                                <input id="data" type="text" value={this.state.dataConsulta} onChange={this.atualizaEstadoDataConsultaForm} placeholder="Data da Consulta" />
                            </div>

                            <div className="situacaoInput">
                                <label>Situação</label>
                                <input id="situacao" type="text" value={this.state.idSituacao} onChange={this.atualizaEstadoSituacaoForm} placeholder="Situação" />
                            </div>

                            <div className="descricaoInput">
                                <label>Descrição</label>
                                <input id="descricao" type="text" value={this.state.descricao} onChange={this.atualizaEstadoDescricaoForm} placeholder="Descrição" />
                            </div>
                        </form>

                        <div className="botao_enviar">
                            <input type="submit" value="Enviar" />
                        </div>

                    </div>
                </section>
            </div>

        )
    }
}