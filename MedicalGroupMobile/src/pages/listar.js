import React,{Component} from 'react';
import{ Text, Image,StyleSheet, View, FlatList} from "react-native";
import Topo from '../componentes/topo';
import api from "../services/api";

class listar extends Component{
    render(){
        return(
            <View>
            <Topo />
            
            <View style={styles.quadrado3}>
                <Text style={styles.tituluzinho}>Sua Consulta</Text>
            
            <View style={styles.listinha}>
                <Text style={styles.pro}>Prontuário</Text>
                <Text style={styles.med}>Médico</Text>
                <Text style={styles.dat}>Data Consulta</Text>
                <Text style={styles.sit}>Situação</Text>
                <Text style={styles.des}>Descrição</Text>
            </View>

            </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    quadrado3:{
        backgroundColor:"#2C914D",
        borderRadius: 10,
        height:70,
        width: 370,
        marginLeft: 20,
        marginTop: 30
    },
    tituluzinho:{
        textAlign:"center",
        color: "white",
        fontSize:23,
        marginTop:5
    },
    listinha:{
        flexDirection: "row",
        marginTop:6,
        paddingLeft:15
    },
    pro:{
        color:"white",
        fontSize:14
    },
    med:{
        color:"white",
        fontSize:14,
        marginLeft:5
    },
    dat:{
        color:"white",
        fontSize:14,
        marginLeft:5
    },
    sit:{
        color:"white",
        fontSize:14,
        marginLeft:5
    },
    des:{
        color:"white",
        fontSize:14,
        marginLeft:5
    }

})

export default listar;