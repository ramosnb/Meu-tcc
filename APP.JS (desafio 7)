import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar' ;
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack ' ;


import TelaLogin from '. / telas/Tela1Login' ;
import Telalnicial from './te1as/Tela1Inicia1' ;

class App extends Component{
render(){
const Stack = createNativeStackNavigator ();
return(
<NavigationContainer>
<StatusBar backgroundCoLor= 'darkred' barStyLe='light-content' />
<Stack.Navigator>
<Stack.Screen name = "Telalnicial" component= {Telalnicial}
options={{headerShown:false}}/>
<Stack.Screen name = "TelaLogin" component = {TelaLogin}
options={{headerShown:false}}/>
</Stack.Navigator>
</NavigationContainer>

);
}
}

export default App;
