import React,{Component} from 'react';
import {Text,Image, StyleSheet, View, FlatList, TextInput, Button, AsyncStorage, TouchTableOpacity} from "react-native";
import Topo from '../componentes/topo';
import api from '../services/api';

class Login extends Component{
    render(){
        return(
            <View>

            <Topo />
            
            <Image source={require("../Assets/img/fundo2novo.jpg")}
            style={styles.fundo2}/>
            
            
            <View style={styles.quadrado}>
            
            <Text style={styles.titulo}>LOGIN</Text>

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
        
    }
})

export default Login;