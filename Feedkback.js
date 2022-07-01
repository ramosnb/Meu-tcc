import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, Image, TouchableHighlight } from 'react-native';
import React, {useState} from 'react'; 
import Slider from '@react-native-community/slider'
import { Input } from 'react-native-elements';


export default function Feedback(props)
{
    
    return (
        
        <View style={styles.container}>


            <View style={styles.texto}>          
            <Text style = {styles.titulo}>Gostou dos nossos serviços?, Nos avalie!!</Text>
            <Text style = {styles.titulo}>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇</Text>
</View>


<View
style={styles.btnEstrelas}>
<button
      title='1'
      onClick={() => {
            alert('Obrigado pelo feedback, estaremos melhorando!');
          }}
          > <Image source={require('../estrela.png')} style={{width: 50, height: 50}} /></button>


<button
      title='2'
      onClick={() => {
            (alert('Obrigado pelo feedback, estaremos melhorando!'));
          }}
          > <Image source={require('../estrela.png')} style={{width: 50, height: 50}} /></button>
      
      <button
      title='3'
      onClick={() => {
            (alert('Agradeçemos a sua colaboração'));
          }}
          > <Image source={require('../estrela.png')} style={{width: 50, height: 50}} /></button>

<button
      title='4'
      onClick={() => {
            (alert('Obrigado por utilizar nossos serviços'));
          }}
          > <Image source={require('../estrela.png')} style={{width: 50, height: 50}} /></button>
          
<button
      title='5'
      onClick={() => {
            (alert('Ficamos contentes com a sua satisfação'));
          }}
          > <Image source={require('../estrela.png')} style={{width: 50, height: 50}} /></button>

</View>

<View style={styles.CaixaComentario}>
         <label>Gostaria de fazer um comentario sobre o aplicativo? sinta-se a vontade!</label>
             <input 
            type="text" 
                name="comentario" 


/>


</View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
            
            height:150,
            flex: 30,
            backgroundColor: '#98F5FF',
            fontSize: 20,
            alignItems: 'center',
            justifyContent: 'center',
            padding:400
    
},
btnEstrelas: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background: "blue",
    height: 40,
},

CaixaComentario: {
  width: '55%',
    height: 40,
    borderRadius: 20,
    paddingLeft: 20,
    marginBottom: 10,
    padding: '100',
    fontSize:25,
    fontWeight: 'bold',
    color: 'blue',

},

texto: {
  fontSize:40

},
titulo: {
  fontSize:17,
  fontWeight: 'bold',
  color: 'blue',
  height:60
  
},



});
