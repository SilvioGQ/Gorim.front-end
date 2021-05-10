import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import COLORS from '../../resources/colors';

export default function SorteioJogador({ navigation, route }) {
  const { player } = route.params;
  const [ timer, setTimer ] = useState(true);
  
  useEffect(() => {

    if(timer) { 
      setTimeout(() => setTimer(false), 2000);
    } else {
      navigation.reset({ routes: [{ name: 'MenuJogador', params: { player } }] });
    }
  }, [timer]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Gorim</Text>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/Logo/Dados.png')}  />
        <Text style={styles.loading}>Sorteando Personagens...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    padding: 10,
    paddingTop:45
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontWeight: 'normal',
    fontSize: 41.1111,
    lineHeight: 49,
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  loading: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 22,
    lineHeight: 32,
    alignItems: 'center',
  }
});