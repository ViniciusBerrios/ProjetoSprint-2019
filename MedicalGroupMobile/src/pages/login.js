import React,{Component} from 'react';
import {Text,Image, StyleSheet, View, FlatList, TextInput, Button, AsyncStorage, TouchableOpacity} from "react-native";
import Topo from '../componentes/topo';
import api from '../services/api';

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            email:""
            ,senha:""
        }
    }

    realizarLogin = async() =>{
        const resposta = await api.post("/login",{
            email: this.state.email,
            senha: this.state.senha
        });
        const token = resposta.data.token;

        AsyncStorage.setItem("Sprint2Projeto",token);
        this.props.navigation.navigate("Listar");
    }

    render(){
        return(
            <View>

            <Topo />
            
            <Image source={require("../Assets/img/fundo2novo.jpg")}
            style={styles.fundo2}/>
            
            
            <View style={styles.quadrado}>
            
            <Text style={styles.titulo}>LOGIN</Text>

            <TextInput style={styles.input}
            
                onChangeText={email=>this.setState({email})}
                placeholder="Insira seu Email"

            />

            <TextInput style={styles.input}
            
                onChangeText={senha=>this.setState({senha})}
                placeholder="Insira sua Senha"
                secureTextEntry={true}

            />

            <TouchableOpacity style={styles.button} onPress={this.realizarLogin}>
                <Text style={styles.buttontxt}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.nada}>Ou</Text>

            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttontxt2}>Cadastrar-Se</Text>
            </TouchableOpacity>

            </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fundo2:{
        height:550,
        width:420,
        marginTop:10
    },
    quadrado:{
        height:450,
        width:350,
        backgroundColor:"white",
        borderRadius:20,
        marginTop:-520,
        marginLeft: 35
    },
    titulo:{
        fontSize:30,
        color: "black",
        marginLeft:135,
        marginTop: 20
        
    },input:{
        width:250,
        backgroundColor:"transparent",
        borderBottomColor:"green",
        borderBottomWidth: 3,
        textAlign:"center",
        marginLeft: 50,
        marginTop:30,
        fontSize:15
    },
    button:{
        height:40,
        width:150,
        backgroundColor:"#61de65",
        borderBottomColor:"black",
        borderWidth:2,
        borderRadius:10,
        marginLeft:100,
        marginTop:40
    },
    buttontxt:{
        textAlign:"center",
        color:"white",
        marginTop:4,
        fontSize:18
    }, 
    button2:{
        height:40,
        width:150,
        backgroundColor:"#61de65",
        borderBottomColor:"black",
        borderWidth:2,
        borderRadius:10,
        marginLeft:100,
        marginTop:10
    },
    buttontxt2:{
        textAlign:"center",
        color:"white",
        marginTop:4,
        fontSize:18
    },
    nada:{
        color:"black",
        fontSize:18,
        textAlign:"center",
        marginTop:10
    }
})

export default Login;