import React,{Component} from 'react';
import firebase from '../../services/firebase';

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

    render(){
        return(
            <div>

            <h1>Dados do Sistema</h1>

            {
                this.state.listaDados.map((analises) =>{
                    return(
                        <li key= {analises.id}> {analises.Longitude} - {analises.Latitude} 
                        - {analises.IdadePaciente} - {analises.EspecialidadeMedico} - {analises.DoencaPaciente}</li>
                    );
                })
            }

            </div>
        )
    }
}