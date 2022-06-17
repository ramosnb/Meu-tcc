import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, TouchableHighlight } from 'react-native';
import React, {useState} from 'react'; 
import { Picker } from 'react-native-web';

export default function Reserva(props)
{
    
    return (
        
        <View style={styles.container}>
            <Text></Text>

<View style={styles.selecionador}>
    <Text> QUAL VAGA DESEJA SELECIONAR?</Text>
    <Picker>
        <Picker.Item label ="     SELECIONE     " value= "     SELECIONE     " />
        <Picker.Item label ="A1" value= "A1" />
        <Picker.Item label ="A2" value= "A2" />
        <Picker.Item label ="A3" value= "A3" />
    </Picker>
</View>

<TouchableHighlight 
      title='Turno Manhã'
      style={styles.btnConta}
      onPress={()=>props.navigation.navigate('')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno Manhã</Text>
</TouchableHighlight>

<TouchableHighlight 
      title='Turno Noite'
      style={styles.btnReservar}
      onPress={()=>props.navigation.navigate('')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Turno</Text>
</TouchableHighlight>

<TouchableHighlight 
      title='Confirmar'
      style={styles.btnConfirmar}
      onPress={()=>props.navigation.navigate('*******')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>Confirmar</Text>
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
},

     selecionador: {
    
    widht:300,
    height:250,
    backgroundColor: '#98F5FF',
    marginTop:40

},

btnConfirmar: {
    width:'30%',
        height:30,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 10

},

});
