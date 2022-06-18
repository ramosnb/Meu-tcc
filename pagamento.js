import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, TouchableHighlight } from 'react-native';
import React, {useState} from 'react'; 

export default function Pagamento(props)
{
    
    return (
        
        <View style={styles.container}>
            <Text></Text>

            <Text> Seu codigo de pagamento e: 4238476324678324356728</Text>


<TouchableHighlight 
      title='Copiar'
      style={styles.btnCopiar}
      onPress={()=>props.navigation.navigate('Feedback')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Copiar</Text>
</TouchableHighlight>
    
<Text style = {styles.titulo}>Importante: Caso não realize o pagamento dentro de 30 minutos,a reserva sera cancelada!</Text>


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
        width:'30%',
        height:30,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 30

},

btnInicio: {
        width:'30%',
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
    height:60

},

});
