import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, TouchableHighlight } from 'react-native';
import React, {useState} from 'react'; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { Input } from 'react-native-elements';

export default function Cadastro(props) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    async function createUser(){
      await createUserWithEmailAndPassword(auth, email, senha)
      .then(value => {
        console.log('cadastrado com sucesso! \n' + value.user.uid);
      })
      .catch(error => console.log(error));

    };

    async function login(){
      await signInWithEmailAndPassword(auth, email, senha)
      .then(value => {
        console.log('Login realizado!');
      })
      .catch(error => console.log(error));

    };

    console.log(props);
    return (
        <View style={styles.container}>

            
      
      <Input
      placeholder= "E-mail" 
      style={styles.textInput} 
      onChangeText={ value=>setEmail(value)}
      keyboardType="email-address"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      
      />
      <Input secureTextEntry={true}
       placeholder= "Digite uma senha" 
       style={styles.textInput} 
       onChangeText={ value=>setSenha(value)}
       leftIcon={{ type: 'font-awesome', name: 'key' }}
       
       />
      

   <TouchableHighlight 
   style={styles.btnTelaLogin} 
   onPress={()=>props.navigation.navigate('Login')}
   
   > 
     <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold' }}>Ir a tela de login!</Text>
   </TouchableHighlight>

   <TouchableHighlight 
   style={styles.btnCadastro} 
   onPress={()=>createUser()
    (alert('Cadastro Efetuado com sucesso!'))}>
<Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold' }}>Cadastrar!</Text>
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
    btnTelaLogin: {
      width:'100%',
      height:50,
      backgroundColor:'#6E7B8B',
      borderRadius: 20,
      justifyContent:'center',
      marginBottom: 10
  
    },
    btnCadastro: {
      width:'100%',
      height:50,
      backgroundColor:'#6E7B8B',
      borderRadius: 20,
      justifyContent:'center',
      marginBottom: 10
    }
    
  });
