import React, { Component } from 'react';
import fundo2 from '../../Assets/img/fundo2novo.jpg';
import '../../Assets/css/agendamento.css';
import Topo from '../../components/Topo/topo';

export default class CadastraConsulta extends Component{

    render() {
        return (

            <div>

            <Topo/>

    <section className="formulario">
        <div className="fundo2">
            <img src={fundo2} alt="fundo2 spmedical"></img>       
            <h3>Formulario de Agendamento</h3>
            </div>

            <div className="quadrado5">
                <h4>Atendimento</h4>

                <div className="prontuarioInput">
                    <label>Prontuário</label>
                    <input id="prontuario" type="text" />
                </div>

                <div className="medicoInput">
                    <label>Médicos</label>
                    <input id="medico" type="text" />
                </div>

                <div className="dataInput">
                    <label>Data Consulta</label>
                    <input id="data" type="text" />
                </div>

                <div className="situacaoInput">
                    <label>Situação</label>
                    <input id="situacao" type="text" />
                </div>

                <div className="descricaoInput">
                    <label>Descrição</label>
                    <input id="descricao" type="text" />
                </div>

                <div className="botao_enviar">
                    <input type="button" value="Enviar" />
                </div>

                
            </div>
    </section>
            </div>
        
        )
    }
}