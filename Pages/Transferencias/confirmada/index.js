import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function Tranferenciaconfirmada( { navigation }) {
  return (
    <View style={styles.container}>
     <Image
    style={styles.logo}
    source={require('../../../assets/Logo/confirmacao.png')}
    />
    <Text style={styles.texto}> Transação confirmada! </Text>
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
    height:180,
    width:180,
  },
  texto : {
    marginTop: 40,
    fontFamily: 'Rubik_300Light',
    
    fontWeight: 'normal',
    fontSize: 22,
    textAlign: 'center'
  }
});
