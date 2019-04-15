import React, { Component } from 'react';
import fundo2 from '../../Assets/img/fundo2novo.jpg';
import '../../Assets/css/agendamento.css';
import Topo from '../../components/Topo/topo';
import Axios from 'axios';

export default class CadastraConsulta extends Component{

    render() {
        return (

            <div>

            <Topo/>

    <section class="formulario">
        <div class="fundo2">
            <img src={fundo2} alt="fundo2 spmedical"></img>       
            <h3>Formulario de Agendamento</h3>
            </div>

            <div class="quadrado2">
                <h4>Atendimento</h4>

                <div class="prontuarioInput">
                    <label>Prontuário</label>
                    <input id="prontuario" type="text" />
                </div>

                <div class="medicoInput">
                    <label>Médicos</label>
                    <input id="medico" type="text" />
                </div>

                <div class="dataInput">
                    <label>Data Consulta</label>
                    <input id="data" type="text" />
                </div>

                <div class="botao_enviar">
                    <input type="button" value="Enviar" />
                </div>
            </div>
    </section>
            </div>
        
        )
    }
}