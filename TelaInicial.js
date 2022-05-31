import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';



class Telalnicial extends Component 
{

    render() {
        let img = require('../img/logo.png');
        return (
                <View style = {estilos.areaFundo}>
                    <View style = {estilos.areaLogo}>
                    <Image source ={img}
                        style = {estilos.img}
                        resizeMode = 'contain' />
        </View>
<View style = {estilos.areaTitulo}>
<Text style = {estilos.titulo}>DSV MOBILE</Text>
<Text style = {estilos.titulo}>DSV</Text>
</View>
<View style = {estilos.areaSubTitulo}>
<Text style = {estilos.subTitulo}>Passagem de Parametro entre Telas</Text>
</View>
<View style = {estilos.areaBotao}>
<TouchableHighlight style = {estilos.botao} onPress={ ()=> alert("voce clicou aqui")}>
 <Text style = {estilos.textoBotao}>Entrar</Text>
</TouchableHighlight>
</View>
<View style = {estilos.areaRodape}>
<Text style = {estilos.rodape}>Luiz Fernando Corcini</Text>
<Text style = {estilos.rodape}>2022</Text>
  </View> 

</View >

);
    }
}
export default Tela01;

const estilos = StyleSheet.create(
    {

areaFundo : {flex: 1,backgroundColor: "lightgray"} ,
areaLogo: {height :400, alignltems : 'center' , justifyContent : 'center' } ,
areaTitulo: {height: '10%' , backgroundColorr: 'darkred' , alignltems: 'center' , justifyContent:'center'},
areaSubTitulo: {height: '5%' , alignltems: 'center' , justifyContent:'center'},
areaRodape: {height: '7%',  alignltems:  'center ' , justifyContent: 'center',
justifyContent:'center',alignitems:'center', flexDirection:'row', borderTopWidth:1},
areaBotao : {flex: 1, justifyContent: 'center', alignltems: 'center'},
// TEXT
titulo: {fontSize:25, color: 'lightgray'},
subTitulo: {fontSize:19, fontSty1e: 'italic' , fontWeight: 'bold'},
rodape: {color: 'darkblue' , fontSize : 15},
textoBotao : { fontSize: 30 ,color: 'darkred' , alignSelf: 'center'},
//IMAGE
img : {width : 200 , height : 200, borderRadius : 100},
//BOTAO
botao: {height: 59, width: 130, borderColorr: 'darkred' ,borderWidth : 2, borderRadius : 25}
})
                

