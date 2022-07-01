import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, TouchableHighlight, Image } from 'react-native';
import React, {useState} from 'react'; 
import ReactDOM from "react-dom";
import { useEffect } from "react";


export default function Pagamento(props)
{
    
    return (
        
        <View style={styles.container}>

<Image source={require('../obrigado.png')}
               style= {{width: 250, height: 250}}>
            </Image>
    
<Text style = {styles.titulo}>VAGA RESERVADA COM SUCESSO!!</Text>
<Text style = {styles.titulo}>Confirmação da Vaga: Fileira 1</Text>


<TouchableHighlight 
      title='Cancelar Reserva'
      style={styles.btnInicio}
      onPress={()=>props.navigation.navigate('Reserva')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Cancelar Reserva</Text>
</TouchableHighlight>

<TouchableHighlight 
      title='Feedback'
      style={styles.btnInicio}
      onPress={()=>props.navigation.navigate('Feedback')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Feedback</Text>
</TouchableHighlight>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
            height:90,
            flex: 1,
            backgroundColor: '#98F5FF',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 180
    
},


titulo:{
    fontSize:17,
    fontWeight: 'bold',
    color: 'red',
    height:70

},
btnInicio: {
    width:'50%',
    height:30,
    backgroundColor:'#6E7B8B',
    borderRadius: 20,
    justifyContent:'center',
    marginBottom: 20

},

});
