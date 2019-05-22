import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, FlatList, AsyncStorage } from "react-native";
import Topo from '../componentes/topo';
import api from "../services/api";

class listar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaConsulta: []
        };
    }

    componentDidMount() {
        this.carregarConsultas();
    }

    carregarConsultas = async () => {
        const token = await AsyncStorage.getItem("Sprint2Projeto");
        fetch('http://192.168.3.114:5000/api/Consultas', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaConsulta: data }))
            .catch(erro => console.log(erro))
    }

    render() {
        return (
            <View>
                <Topo />

                <View style={styles.quadrado3}>
                    <Text style={styles.tituluzinho}>Sua Consulta</Text>

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

    renderizaItem = ({ item }) => (
        <View>
            <View style={styles.alinha}>
                <Text style={styles.Prontuario}>{"Prontuário:"}</Text>
                <Text style={styles.IdProntuarioo}>{item.idProntuarioNavigation.nome}</Text>
            </View>

            <View style={styles.alinha}>
                <Text style={styles.Medico}>{"Médico:"}</Text>
                <Text style={styles.IdMedicoo}>{item.idMedicoNavigation.nome}</Text>
            </View>

            <View style={styles.alinha}>
                <Text style={styles.dataConsulta}>{"Data Consulta:"}</Text>
                <Text style={styles.dataConsultaa}>{item.dataConsulta}</Text>
            </View>

            <View style={styles.alinha}>
                <Text style={styles.situacao}>{"Situação:"}</Text>
                <Text style={styles.IdSituacaoo}>{item.idSituacaoNavigation.statu}</Text>
            </View>

            <View style={styles.alinha}>
                <Text style={styles.descricao}>{"Descrição:"}</Text>
                <Text style={styles.descricaoo}>{item.descricao}</Text>
            </View>
            <View style={styles.linha}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    quadrado3: {
        backgroundColor: "#2C914D",
        borderRadius: 10,
        height: 50,
        width: 370,
        marginLeft: 20,
        marginTop: 35
    },
    tituluzinho: {
        textAlign: "center",
        color: "white",
        fontSize: 23,
        marginTop: 8
    },
    quadrado4: {
        backgroundColor: "#2C914D",
        borderRadius: 10,
        height: 382,
        width: 370,
        marginLeft: 20,
        marginTop: 25
    },
    IdProntuarioo: {
        color: "black",
        fontSize: 18,
        marginLeft: 130,
        marginTop: -26
    },
    IdMedicoo: {
        color: "black",
        fontSize: 18,
        marginLeft: 130,
        marginTop: -26
    },
    dataConsultaa: {
        color: "black",
        fontSize: 18,
        marginLeft: 130,
        marginTop: -26
    },
    IdSituacaoo: {
        color: "black",
        fontSize: 18,
        marginLeft: 130,
        marginTop: -26
    },
    descricaoo: {
        color: "black",
        fontSize: 18,
        marginLeft: 130,
        marginTop: -26
    },
    Prontuario: {
        color: "white",
        fontSize: 20,
        marginLeft: -210,
        marginTop: 10
    },
    Medico: {
        color: "white",
        fontSize: 20,
        marginLeft: -210,
        marginTop: 8
    },
    dataConsulta: {
        color: "white",
        fontSize: 20,
        marginLeft: -210,
        marginTop: 8
    },
    situacao: {
        color: "white",
        fontSize: 20,
        marginLeft: -210,
        marginTop: 8
    },
    descricao: {
        color: "white",
        fontSize: 20,
        marginLeft: -210,
        marginTop: 8
    },
    alinha: {
        alignItems: "center"
    },
    linha: {
        height: 5,
        width: 700,
        backgroundColor: "white",
        marginTop: 16,
    }

})

export default listar;