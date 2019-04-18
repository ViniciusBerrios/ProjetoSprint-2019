import React, {Component} from 'react';
import '../../Assets/css/consulta.css';
import Topo from '../../components/Topo/topo';

export default class ListaConsulta extends Component{
    
    constructor(){
        super();

        this.state ={
            idProntuario: '',
            idMedico: '',
            dataConsulta: '',
            idSituacao: '',
            descricao: '',
            lista: []
        };
    }

    buscaConsultas(){
        let token = localStorage.getItem("Sprint2Projeto");
        fetch('http://localhost:5000/api/Consultas',{
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        })
        .then(resposta => resposta.json())
        .then(data => this.setState({lista : data}))
        .catch(erro => console.log(erro))
    }

    componentDidMount(){
        this.buscaConsultas();
    }

    render() {
        return(
            <div>

                <Topo />

        <section className="meio">

        <div className="quadrado2">
            <h3>Sua Consulta</h3>

            <ul>
                    <li>Prontuário</li>
                    <li>Médico</li>
                    <li>Data Consulta</li>
                    <li>Situação</li>
                    <li>Descrição</li>
                </ul>

            </div>

        <div className="quadrado3">

        <table id="tabela">
        <tbody>
            {
                this.state.lista.map(function(consulta){
                    return(
                        <tr key={consulta.id}>
                            <td>{consulta.idProntuario}</td>
                            <td>{consulta.idMedico}</td>
                            <td>{consulta.dataConsulta}</td>
                            <td>{consulta.idSituacao}</td>
                            <td>{consulta.descricao}</td>
                        </tr>
                    )
                })
            }
        </tbody>
        </table>
  
        </div>

    </section>
    
    </div>
        )
    }
}