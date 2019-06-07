import React,{Component} from 'react';
import firebase from '../../services/firebase';
import Topo from '../../components/Topo/topo';
import '../../Assets/css/dados.css';

export default class DadosSistema extends Component{
    
    constructor(){
        super();

        this.state={
            listaDados : [],
            Longitude: '',
            Latitude: '',
            IdadePaciente: '',
            EspecialidadeMedico: '',
            DoencaPaciente: ''
        }
    }

    listaDadosRealTime(){
        firebase.firestore().collection("analise")
        .onSnapshot((analise) => {
            let analiseArray = [];

                analise.forEach((analises) =>{
                    analiseArray.push({
                        id: analises.id,
                        Longitude: analises.data().Longitude,
                        Latitude: analises.data().Latitude,
                        IdadePaciente: analises.data().IdadePaciente,
                        EspecialidadeMedico: analises.data().EspecialidadeMedico,
                        DoencaPaciente: analises.data().DoencaPaciente
                    })
                })

                this.setState({listaDados : analiseArray}, () => {
                    console.log(this.state.listaDados);
                })
        })
    }

    componentDidMount(){
        this.listaDadosRealTime();
    }

    atualizaEstado(event){
        this.setState({[event.target.name] : event.target.value});
    }

    cadastrarDados(event){
        event.preventDefault();

        firebase.firestore().collection("analise")
        .add({
            Longitude: this.state.Longitude,
            Latitude: this.state.Latitude,
            IdadePaciente: this.state.IdadePaciente,
            EspecialidadeMedico: this.state.EspecialidadeMedico,
            DoencaPaciente: this.state.DoencaPaciente
        }) .then(() =>{
            alert("Dados Cadastrado Com Sucesso")
            this.limparFormulario();
        }).catch((erro) =>{
            console.log('tag', erro);
        })
    }
    limparFormulario(){
        this.setState({
            Longitude: '',
            Latitude: '',
            IdadePaciente: '',
            EspecialidadeMedico: '',
            DoencaPaciente: ''
        })
    }

    delete(event){
        event.preventDefault();

        if(window.confirm("Quer apagar mesmo?")){
            firebase.firestore().collection("analise")
                .doc(event.target.id)
                .delete()
                .then((result) =>{
                    alert("Dados Apagado");
                }).catch((erro) =>{
                    console.log('erro', erro)
                })
        }
    }

    render(){
        return(
            <div>

            <Topo />
            <section className="dados">

            <div className="quadrado8">
            
            <h1>SISTEMA DOS PACIENTES</h1>


            <div className="cadastrar">
                <form onSubmit={this.cadastrarDados.bind(this)}>
                
                <div className="longitude_input">      
                <input type="text" name="Longitude" placeholder="Longitude" value={this.state.Longitude} onChange={this.atualizaEstado.bind(this)}/>
                </div>

                <div className="latitude_input">
                <input type="text" name="Latitude" placeholder="Latitude" value={this.state.Latitude} onChange={this.atualizaEstado.bind(this)}/>
                </div>

                <div className="idade_input">
                <input type="text" name="IdadePaciente" placeholder="Idade do Paciente" value={this.state.IdadePaciente} onChange={this.atualizaEstado.bind(this)}/>
                </div>

                <div className="especialidade_input">
                <input type="text" name="EspecialidadeMedico" placeholder="Especialidade do Médico" value={this.state.EspecialidadeMedico} onChange={this.atualizaEstado.bind(this)}/>
                </div>

                <div className="doenca_input">
                <input type="text" name="DoencaPaciente" placeholder="Doença do Paciente" value={this.state.DoencaPaciente} onChange={this.atualizaEstado.bind(this)}/>
                </div>

                <div className="botazinho_enviar">
                <button type="submit">Enviar</button>
                </div>

                    </form>
            </div>

            <div className="listagem2">

            <h2>Lista de Dados</h2>

            <table  id="tabela2">
            {
                this.state.listaDados.map((analises) =>{
                    return(
                        <tr key= {analises.id}> 
                        <td>{analises.Longitude}</td>
                        <td>{analises.Latitude}</td> 
                        <td>{analises.IdadePaciente}</td>
                        <td>{analises.EspecialidadeMedico}</td>
                        <td>{analises.DoencaPaciente}</td>
                        <button id={analises.id} onClick={this.delete.bind(this)}>Apagar</button>
                        </tr>
                    );
                })
            }
            </table>
            </div>

            </div>

            </section>

            </div>
        )
    }
}