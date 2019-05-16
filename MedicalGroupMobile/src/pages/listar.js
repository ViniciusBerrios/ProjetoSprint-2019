import React,{Component} from 'react';
import{ Text, Image,StyleSheet, View, FlatList, AsyncStorage} from "react-native";
import Topo from '../componentes/topo';
import api from "../services/api";

class listar extends Component{

    constructor(props){
        super(props);
        this.state={
            listaConsulta:[]
        };
    }

    componentDidMount(){
        this.carregarConsultas();
    }

    carregarConsultas = async () => {
        const token = await AsyncStorage.getItem("Sprint2Projeto");
        fetch('http://192.168.3.114:5000/api/Consultas',{
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        })
        .then(resposta => resposta.json())
        .then(data => this.setState({listaConsulta : data}))
        .catch(erro => console.log(erro))
    }

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

            <View style={styles.quadrado4}>
                <FlatList
                    data={this.state.listaConsulta}
                    keyExtractor={item => item.id}
                    renderItem={this.renderizaItem}
                />
            </View>
            
            </View>
        );
    }

    renderizaItem = ({item}) => (
        <View style={styles.listaCompleta}>
            <View>
                <Text style={styles.IdProntuarioo}>{item.idProntuario}</Text>
            </View>

            <View>
                <Text style={styles.IdMedicoo}>{item.idMedico}</Text>
            </View>

            <View>
                <Text style={styles.dataConsultaa}>{item.dataConsulta}</Text>
            </View>

            <View>
                <Text style={styles.IdSituacaoo}>{item.idSituacao}</Text>
            </View>

            <View>
                <Text style={styles.descricaoo}>{item.descricao}</Text>
            </View>
        </View>
    )
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
    },
    quadrado4:{
        backgroundColor:"#2C914D",
        borderRadius:10,
        height:365,
        width:370,
        marginLeft:20,
        marginTop:15
    },
    listaCompleta:{
        flexDirection: "row"
    },
    IdProntuarioo:{
        color:"white",
        fontSize:16,
        marginLeft:23
    },
    IdMedicoo:{
        color:"white",
        fontSize:16,
        marginLeft:12
    },
    dataConsultaa:{
        color:"white",
        fontSize:16,
        marginLeft:12
    },
    IdSituacaoo:{
        color:"white",
        fontSize:16,
        marginLeft:12
    },
    descricaoo:{
        color:"white",
        fontSize:16,
        marginLeft:12
    }

})

export default listar;