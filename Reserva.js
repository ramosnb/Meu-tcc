import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, TouchableHighlight, Image, Alert } from 'react-native';
import React, {useState} from 'react'; 
import { Picker } from 'react-native-web';
import { Input } from 'react-native-elements';


export default function Reserva(props) {


    return (
        
      
        <View style={styles.container}>
            
            <Image source={require('../carro.png')}
               style= {{width: 250, height: 250}}>
            </Image>
<View style={styles.selecionador}>
<Text style = {styles.titulo}>Qual Turno deseja?</Text>
    <TouchableHighlight 
      title='manha'
      style={styles.btnManha}
      onPress={()=>props.navigation.navigate('manha')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Manhã</Text>
</TouchableHighlight>
<TouchableHighlight 
      title='tarde'
      style={styles.btnTarde}
      onPress={()=>props.navigation.navigate('tarde')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Tarde</Text>
</TouchableHighlight>
<TouchableHighlight 
      title='noite'
      style={styles.btnNoite}
      onPress={()=>props.navigation.navigate('noite')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Noite</Text>
</TouchableHighlight>


</View></View> );}

const styles = StyleSheet.create({

    container: {
            
            height:90,
            flex: 1,
            backgroundColor: '#98F5FF',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 180
    
},


     selecionador: {
    
    widht:100,
    height:100,
    backgroundColor: '#98F5FF',
    marginTop:40,
    
},

btnConfirmar: {
    width:'100%',
        height:30,
        justifyContent:'center',
        marginBottom: 10,
        alignItems:'center'
        

},

Fila1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
            justifyContent: 'center',
},

FilaDois: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
            justifyContent: 'center',
},

FilaTres: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
            justifyContent: 'center',
            padding: '100'
},
titulo: {
    fontSize:17,
    fontWeight: 'bold',
    color: 'red',
    height:60
    
},
btnManha: {
      width:'50%',
      height:30,
      backgroundColor:'#6E7B8B',
      borderRadius: 20,
      justifyContent:'center',
      marginBottom: 20,
  
  },
  btnTarde: {
      width:'50%',
      height:30,
      backgroundColor:'#6E7B8B',
      borderRadius: 20,
      justifyContent:'center',
      marginBottom: 20,
      
  
  },
  btnNoite: {
      width:'50%',
      height:30,
      backgroundColor:'#6E7B8B',
      borderRadius: 20,
      justifyContent:'center',
      marginBottom: 20
  
  },

});
