import { Image, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, TouchableHighlight } from 'react-native';
import React, {useState} from 'react'; 




export default function Login(props)
{

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    console.log(props);
    return (


        <View style={styles.container}>

         
<TextInput 
placeholder= "Seu e-mail" 
style={styles.textInput} 
onChangeText={ text=>setEmail(text)}/>


<TextInput 
secureTextEntry={true} 
placeholder= "Digite sua senha" 
style={styles.textInput} 
onChangeText={ text=>setSenha(text)}/>

<TouchableHighlight 
style={styles.btnLogar}
 onPress={()=>props.navigation.navigate('Principal')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold' }}>Esqueci minha senha</Text>
   </TouchableHighlight>


<TouchableHighlight 
title='Ir a tela principal'
style={styles.btnLogar}
 onPress={()=>props.navigation.navigate('Principal')}> 
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold' }}>Logar!</Text>
   </TouchableHighlight>
            
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#98F5FF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      },
      textInput: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 10,
        marginBottom: 10
    
      },
      btnLogar: {
        width:'100%',
        height:50,
        backgroundColor:'#6E7B8B',
        borderRadius: 20,
        justifyContent:'center',
        marginBottom: 10
    
      }

});
   
