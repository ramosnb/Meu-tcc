import React, { Component } from 'react';
import { FlatList, StyleSheet, Image, Text, View, TouchableHighlight, Button } from 'react-native';

class App extends Component {
constructor(props) {
super(props);
this.mostra_dados = this.mostra_dados.bind(this);
};
mostra_dados({ item }) {
return (
<View>
<View style={{ flexDirection: 'rom', marginHorizontal: 10, marginBottom: 10 }}>
<Image source={item.foto}
style={{ width: 50, height: 60, borderRadius: 25, marginHorizontal: 10, marginVertical: 10, alignItems: 'center' }} />
<View style={{ marginvertical: 10 }}>
<Text style={{ fontweight: 'bold' }}>{item.nome}</Text>
<Text>{item.email}</Text>
<Text style={{ color: 'darkblue' }}>{item.curso}</Text>
</View>
</View>
<View style={estilos.separador} />
<Button
title = "Alterar Senha"
onPress = {this.clicou_botao}/>

</View>


);
}

render() {
let fonte_de_dados = [

{nome: 'Fabiana Carraro', email: "fabiana@fabiana.com.br", foto: require("../pessoa3.png")
}];

return (

<View style={estilos.area_fundo}>
    <View style={estilos.area_cabecalho}>
<Image
source={require("../carro.png")}
style={{ width: 50, height: 50, marginhorizontal: 5 }}
/>
<View>
<Text style={estilos.sub_titulo}>Minha Conta</Text>
</View>   
  
</View>
<View style={estilos.area_lista}>
<FlatList
data={fonte_de_dados}
renderItem={this.mostra_dados}
/>
</View>
</View>


);}}

const estilos = StyleSheet.create({

area_fundo: {
flex: 1, backgroundColor: '#98F5FF', padding: 10
},
area_cabecalho: {
flex: 0.15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
},
area_lista: {
flex: 0.9, backgroundcolor: 'lightgray', borderRadius: 25
},
titulo: {
color: 'red', fontSize: 100, fontweight: 'bold',
width: '100%', textAlign: 'center',
borderTopLeftRadius: 20, borderTopRightRadius: 20, marginhorizontal: 5
},
sub_titulo: {
color: 'blue', fontSize: 25,
fontstyle: 'italic', width: '100%',
textAlign: 'center', backgroundcolor: 'darkorange',
borderBottomleftRadius: 20, borderBottomRightRadius: 20,
marginTop: 1, marginHorizontal: 5
},
item_FlatList: {
padding: 10, fontSize: 85, height: 40, textAlign: 'center'
}, 
btnTelaLogin: {
    width:'100%',
    height:50,
    backgroundColor:'#6E7B8B',
    borderRadius: 20,
    justifyContent:'center',
    marginBottom: 10

  },
});
export default App;
