import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function Espera( { navigation }) {
  return (
    <View style={styles.container}>
     <Image
    style={styles.logo}
    source={require('../../assets/Logo/clock.png')}
    />
    <Text style={styles.texto}> Aguardando resposta {'\n'} dos outros personagens..</Text>
    </View>
  );
}
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    alignItems:'center'
  },
  logo:{
    height:170,
    width:160,
  },
  texto : {
    margin: 15,
    fontFamily: 'Rubik_300Light',
    
    fontWeight: 'normal',
    fontSize: 22,
    textAlign: 'center'
  }
});
