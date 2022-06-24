import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, TouchableHighlight } from 'react-native';
import React, {useState} from 'react'; 
import ReactDOM from "react-dom";
import { useEffect } from "react";


export default function Pagamento(props)
{
    
    return (
        
        <View style={styles.container}>

<Text style = {styles.titulo}>Seu link para pagamento sera gerado partir deste botão</Text>


<button
    style={{
        color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums',
        width:'50%',
        height:30,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 20
      }}
      onClick={() => {
        window.open("https://www.paypal.com/donate/?hosted_button_id=4A7LPMNRJQ7DW");
      }}
      > Pagar</button>



    
<Text style = {styles.titulo}>**Importante: Caso não realize o pagamento dentro de 30 minutos,a reserva sera cancelada**</Text>

<TouchableHighlight 
      title='Feedback'
      style={styles.btnInicio}
      onPress={()=>props.navigation.navigate('Feedback')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Feedback</Text>
</TouchableHighlight>

<TouchableHighlight 
      title='Voltar para inicio'
      style={styles.btnInicio}
      onPress={()=>props.navigation.navigate('Principal')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Voltar para inicio</Text>
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


btnCopiar: {
        width:'50%',
        height:30,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 30

},

btnInicio: {
        width:'50%',
        height:30,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 20

},

titulo:{
    fontSize:17,
    fontWeight: 'bold',
    color: 'red',
    height:70

},

btnBanco: {
    width:'50%',
    height:30,
    backgroundColor:'#6E7B8B',
    borderRadius: 20,
    justifyContent:'center',
    marginBottom: 20

},

});
