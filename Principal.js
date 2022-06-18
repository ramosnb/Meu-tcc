import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, TouchableHighlight } from 'react-native';
import React, {useState} from 'react'; 

export default function Principal(props)
{
    
    return (
        
        <View style={styles.container}>
            <Text></Text>

<TouchableHighlight 
      title='Minha conta'
      style={styles.btnConta}
      onPress={()=>props.navigation.navigate('')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Minha conta</Text>
</TouchableHighlight>

<TouchableHighlight 
      title='Reservar'
      style={styles.btnReservar}
      onPress={()=>props.navigation.navigate('Reserva')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Reservar Vaga</Text>
</TouchableHighlight>
      
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        
            height:40,
            flex: 1,
            backgroundColor: '#98F5FF',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
    
},

btnConta: {
    width:'100%',
        height:50,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 10
},

btnReservar: {
    width:'100%',
        height:50,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 10
}


});
