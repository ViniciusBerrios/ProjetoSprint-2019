import React,{Component} from 'react';
import {Text, Image, StyleSheet, View, FlatList, TouchableOpacity, AsyncStorage} from "react-native";
import Topo from '../componentes/topo';
import { TextInput } from 'react-native-gesture-handler';

import api from '../services/api';

class cadastrar extends Component{

    constructor(props){
        super(props);
        this.state={
            idProntuario:""
            ,idMedico:""
            ,dataConsulta:""
            ,idSituacao:""
            ,descricao:""
        }
    }
    cadastrarConsulta = async() =>{
        const token = await AsyncStorage.getItem("Sprint2Projeto");

        fetch('http://192.168.3.114:5000/api/Consultas', {
            method: 'POST',
            body: JSON.stringify({
                idProntuario: this.state.idProntuario,
                idMedico: this.state.idMedico,
                dataConsulta: this.state.dataConsulta,
                idSituacao: this.state.idSituacao,
                descricao: this.state.descricao
            }),
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(resposta => resposta.json())
        .then(data => {
            this.props.history.push('/listar');
            console.log(data);
        })
        .catch(erro => console.log(erro))
    }

    render(){
        return(
            <View>
            <Topo />
           
            <Image source={require("../Assets/img/hospital.jpg")}
            style={styles.fundo3}/>

            <View style={styles.quadradoo}>
                <Text style={styles.tituloo}>Atendimento</Text>

                <TextInput style={styles.input} onChangeText={prontuario=>this.setState({prontuario})} placeholder="Prontuário"/>

                <TextInput style={styles.input} onChangeText={medico=>this.setState({medico})} placeholder="Médico"/>

                <TextInput style={styles.input} onChangeText={dataConsulta=>this.setState({dataConsulta})} placeholder="Data da Consulta"/>

                <TextInput style={styles.input} onChangeText={situacao=>this.setState({situacao})} placeholder="Situação"/>

                <TextInput style={styles.input} onChangeText={descricao=>this.setState({descricao})} placeholder="Descrição"/>

                <TouchableOpacity style={styles.button} onPress={this.cadastrar}>
                    <Text style={styles.buttontxt}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            
            </View>
        );
    }

}
const styles = StyleSheet.create({
    fundo3:{
        height:550,
        width:420,
        marginTop:100,
        position: 'absolute'
    },
    quadradoo:{
        height:450,
        width:350,
        backgroundColor:"white",
        borderRadius:20,
        marginTop:40,
        marginLeft:30
    },
    tituloo:{
        color:"#276272",
        fontSize:30,
        marginLeft:90,
        marginTop:10
    },
    input:{
        height:40,
        width:200,
        borderWidth: 2,
        borderColor: "black",
        borderRadius:10,
        marginLeft:77,
        marginTop:22,
        textAlign:"center"
    },
    button:
    {
        height:40,
        width:120,
        backgroundColor:"#61de65",
        borderBottomColor:"black",
        borderWidth:1,
        borderRadius:10,
        marginLeft:120,
        marginTop:20
    },
    buttontxt:{
        color:"white",
        fontSize:17,
        textAlign:"center",
        marginTop:5
    }
})

export default cadastrar;