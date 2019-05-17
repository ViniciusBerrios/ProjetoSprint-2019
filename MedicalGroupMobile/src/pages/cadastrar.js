import React,{Component} from 'react';
import {Text, Image, StyleSheet, View, FlatList, TouchableOpacity, AsyncStorage} from "react-native";
import Topo from '../componentes/topo';

import api from '../services/api';

class cadastrar extends Component{
    render(){
        return(
            <View>
            <Topo />
           
            <Image source={require("../Assets/img/hospital.jpg")}
            style={styles.fundo3}/>

            <View style={styles.quadradoo}>
                <Text style={styles.tituloo}>Atendimento</Text>
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
    }
})

export default cadastrar;