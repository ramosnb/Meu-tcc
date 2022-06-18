import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, TouchableHighlight } from 'react-native';
import React, {useState} from 'react'; 
import Slider from '@react-native-community/slider'
import { Input } from 'react-native-elements';


export default function Feedback(props)
{
    
    return (
        
        <View style={styles.container}>
            <Text></Text>

            <View style={styles.selecionador}>
            <Text> Gostou dos nossos serviços?, Nos avalie!!</Text>
            <Text>⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇</Text>
</View>



<TouchableHighlight 
      title='1'
      style={styles.btn1}
      onPress={()=>props.navigation.navigate('')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>1</Text>
</TouchableHighlight>

<TouchableHighlight 
      title='2'
      style={styles.btn2}
      onPress={()=>props.navigation.navigate('')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>2</Text>
</TouchableHighlight>
      
<TouchableHighlight 
      title='3'
      style={styles.btn3}
      onPress={()=>props.navigation.navigate('')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>3</Text>
</TouchableHighlight>

<TouchableHighlight 
      title='3'
      style={styles.btn3}
      onPress={()=>props.navigation.navigate('')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>4</Text>
</TouchableHighlight>

<TouchableHighlight 
      title='3'
      style={styles.btn3}
      onPress={()=>props.navigation.navigate('')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold', fontVariant: 'oldstyle-nums' }}>5</Text>
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

btn1: {
    width:'30%',
        height:30,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 10
        

},

btn2: {
    width:'30%',
        height:30,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 10
        

},

btn3: {
    width:'30%',
        height:30,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 10
        

},

btn4: {
    width:'30%',
        height:30,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 10
        

},

btn5: {
    width:'30%',
        height:30,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 10
        

},

});
