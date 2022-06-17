import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent, TouchableHighlight } from 'react-native';
import React, {useState} from 'react'; 

export default function Cadastro(props) {

  
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [placa, setPlaca] = useState(null);
    const [erroEmail, setErroEmail] = useState(null);
    const [erroSenha, setErroSenha] = useState(null);
    const [erroPlaca, setErroPlaca] = useState(null);

    const validar = () =>{
      setErroEmail("Tipo de e-mail incorreto!")
      return false


    }

    const salvar = () =>{
      if (validar()){
        console.log("salvou")
      }
    }

    const login = () =>{
  
      alert('DIRECIONANDO PARA TELA DE LOGIN!');
  
    }
  
    const cadastro = () => {
      
  
      alert('Cadastro efetuado com sucesso!');
      
    }
    console.log(props);
    return (
        <View style={styles.container}>
      
      <TextInput
      placeholder= "E-mail" 
      style={styles.textInput} 
      onChangeText={ value=>setEmail(value)}
      keyboardType="email-address"
      errorMessage={erroEmail}
      />
      <TextInput secureTextEntry={true}
       placeholder= "Digite uma senha" 
       style={styles.textInput} 
       onChangeText={ text=>setSenha(text)}
       errorMessage={erroSenha}
       />
      <TextInput placeholder= "Digite a placa do veiculo" 
      style={styles.textInput} 
      onChangeText={ text=>setPlaca(text)}
      errorMessage={erroPlaca}
      />

   <TouchableHighlight 
   style={styles.btnTelaLogin} 
   onPress={()=>props.navigation.navigate('Login')}
   
   > 
     <Text style={{color:'#98F5FF', textAlign: 'center', fontWeight:'bold' }}>Ir a tela de login!</Text>
   </TouchableHighlight>

   <TouchableHighlight 
   style={styles.btnCadastro} 
   onPress={()=>cadastro()}
   
   > 
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
