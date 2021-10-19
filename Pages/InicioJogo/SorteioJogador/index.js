import React, { useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { GameContext, makeRaffle } from '../../../contexts/GameContext';
export default function SorteioJogador({ navigation }) {

  const { stage } = useContext(GameContext);

  useEffect(() => {
    if (stage === 'RAFFLED') {
      let timer = setTimeout(() => {
        navigation.reset({ routes: [{ name: 'SelecaoPersonagem' }] });
      }, 1000);

      return () => clearTimeout(timer);
    }

  }, [stage]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#58AB23'} StatusBarStyle='light-content' />
      <Text style={styles.header}>Gorim</Text>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../assets/symbols/givenAway.png')} />
        <Text style={styles.loading}>Sorteando Personagens...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontWeight: 'normal',
    fontSize: 41.1111,
    lineHeight: 49,
    alignItems: 'center'
  },
  logo: {
    width: 170,
    height: 170
  },
  loading: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 22,
    lineHeight: 32,
    alignItems: 'center',
  }
});