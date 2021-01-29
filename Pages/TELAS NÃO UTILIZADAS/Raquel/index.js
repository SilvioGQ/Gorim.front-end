import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Comecar from '../../../Components/Button'
export default function Raquel( { navigation }) {
  return (
    <View style={styles.container}>
        <Text> Tela para Raquel</Text>
        <TouchableOpacity style= {styles.button} onPress= {()=> navigation.navigate('Agricultor1')}>
            <Text style={styles.texto}>Agricultor</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.button} onPress= {()=> navigation.navigate('Empresario1')}>
            <Text style={styles.texto}>Empresário</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.button} onPress= {()=> navigation.navigate('Fiscal')}>
            <Text style={styles.texto}>Fiscal</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.button} onPress= {()=> navigation.navigate('Prefeitura')}>
            <Text style={styles.texto}>Prefeito</Text>
        </TouchableOpacity>
    </View>
  
  );
}
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#EBFFFD',
    alignItems:'center',
    paddingTop: 25
  },
  texto:{
    fontSize:60,
    color:'#58AB23'
  },
  button: {
      width: '95%',
      height: 100,
      borderRadius: 100,
  }
});
