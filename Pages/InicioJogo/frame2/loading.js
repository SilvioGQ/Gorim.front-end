import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
    <Image  style={styles.logo} source={require('../../../assets/Logo/Grupo.png')}/>
    <Text style={styles.loading}> Aguardando mais jogadores! </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    padding: 10,
    alignItems: 'center',
  },
  logo:{
  width: 200,
  height: 200
  },
  loading:{
    fontFamily: 'Rubik_400Regular',
  fontSize: 22,
  lineHeight: 32,
  alignItems: 'center',
  }
});