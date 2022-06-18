import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Touchable, TouchableOpacityComponent,Image, TouchableHighlight } from 'react-native';
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






<TouchableOpacity
      title='1'
      style={styles.btn1}
      onPress={()=>props.navigation.navigate('')}> 
<Image source={require('../image/star.png')} style={{width: 50, height: 50}} />

</TouchableOpacity>

<TouchableOpacity
      title='1'
      style={styles.btn1}
      onPress={()=>props.navigation.navigate('')}> 
<Image source={require('../image/star.png')} style={{width: 50, height: 50}} />

</TouchableOpacity>
      
<TouchableOpacity
      title='1'
      style={styles.btn1}
      onPress={()=>props.navigation.navigate('')}> 
<Image source={require('../image/star.png')} style={{width: 50, height: 50}} />

</TouchableOpacity>

<TouchableOpacity
      title='1'
      style={styles.btn1}
      onPress={()=>props.navigation.navigate('')}> 
<Image source={require('../image/star.png')} style={{width: 50, height: 50}} />

</TouchableOpacity>
<TouchableOpacity
      title='1'
      style={styles.btn1}
      onPress={()=>props.navigation.navigate('')}> 
<Image source={require('../image/star.png')} style={{width: 50, height: 50}} />

</TouchableOpacity>

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

});
