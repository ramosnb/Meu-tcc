import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



import Home from './Telas/Home';
import Login from './Telas/Login';
import Cadastro from './Telas/Cadastro';
import Principal from './Telas/Principal';
import Reserva from './Telas/Reserva';
import Pagamento from './Telas/Pagamento';
import Feedback from './Telas/Feedback';
import Conta from './Telas/Conta';
import Final from './Telas/Final';
import manha from './Telas/manha';
import tarde from './Telas/tarde';
import noite from './Telas/noite';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            
            title:"Bem vindo ao Easy Parking!",
            headerStyle:{backgroundColor:"#6E7B8B"},
            headerTintColor:'#333',
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center', color: '#98F5FF'}
          }}
           />
          <Stack.Screen 
          name="Login" 
          component={Login}
          options={{
            title:"Realize seu login no Easy Parking!",
            headerStyle:{backgroundColor:"#6E7B8B"},
            headerTintColor:'#333',
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center', color: '#98F5FF'}
          
          }}

          />
          <Stack.Screen
          name="Cadastro" 
          component={Cadastro} 
          options={{
            title:"Cadastre-se!",
            headerStyle:{backgroundColor:"#6E7B8B"},
            headerTintColor:'#333',
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center', color: '#98F5FF'}
          }}
          
          />

         <Stack.Screen
            name="Principal" 
            component={Principal} 
            options={{
            title:"Easy Parking!",
            headerStyle:{backgroundColor:"#6E7B8B"},
            headerTintColor:'#333',
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center', color: '#98F5FF'}
          }}
          
          />

           <Stack.Screen
            name="Reserva" 
            component={Reserva} 
            options={{
            title:"Reserve sua vaga!",
            headerStyle:{backgroundColor:"#6E7B8B"},
            headerTintColor:'#333',
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center', color: '#98F5FF'}
          }}
          
          />

                   <Stack.Screen
            name="Pagamento" 
            component={Pagamento} 
            options={{
            title:"Reserva Realizada!",
            headerStyle:{backgroundColor:"#6E7B8B"},
            headerTintColor:'#333',
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center', color: '#98F5FF'}
          }}
          
          />

                  <Stack.Screen
            name="Feedback" 
            component={Feedback} 
            options={{
            title:"Feedback",
            headerStyle:{backgroundColor:"#6E7B8B"},
            headerTintColor:'#333',
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center', color: '#98F5FF'}
}}

/>

<Stack.Screen
            name="Conta" 
            component={Conta} 
            options={{
            title:"Minha Conta",
            headerStyle:{backgroundColor:"#6E7B8B"},
            headerTintColor:'#333',
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center', color: '#98F5FF'}
}}

/>

<Stack.Screen
            name="Final" 
            component={Final} 
            options={{
            title:"Obrigado por reservar uma vaga conosco!!",
            headerStyle:{backgroundColor:"#6E7B8B"},
            headerTintColor:'#333',
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center', color: '#98F5FF'}
}}

/>
<Stack.Screen
            name="manha" 
            component={manha} 
            options={{
            title:"Obrigado por reservar uma vaga conosco!!",
            headerStyle:{backgroundColor:"#6E7B8B"},
            headerTintColor:'#333',
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center', color: '#98F5FF'}
}}

/>
<Stack.Screen
            name="tarde" 
            component={tarde} 
            options={{
            title:"Obrigado por reservar uma vaga conosco!!",
            headerStyle:{backgroundColor:"#6E7B8B"},
            headerTintColor:'#333',
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center', color: '#98F5FF'}
}}

/>
<Stack.Screen
            name="noite" 
            component={noite} 
            options={{
            title:"Obrigado por reservar uma vaga conosco!!",
            headerStyle:{backgroundColor:"#6E7B8B"},
            headerTintColor:'#333',
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center', color: '#98F5FF'}
}}

/>
                  
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
