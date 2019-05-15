import React,{Component} from 'react';
import{Text,View,StyleSheet,Image} from "react-native";
function Topo(){
    return(
        <View>
            
        <Image source={require("../Assets/img/fundo.jpg")} 
        style={styles.fundo}
        />

        <Image source={require("../Assets/img/logo.png")}
        style={styles.logo}/>
            
        
        </View>
    );
}

const styles = StyleSheet.create({
    fundo:{
        height:100
    },
    logo:{
        height: 80,
        width:70,
        marginLeft: 185,
        marginTop: -90,
        resizeMode: "contain"
    }
})

export default Topo;