import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import Moeda from '../../assets/moedas/Moeda.png';

const Tela = Dimensions.get('screen').width;
export default function Money({coin}) {
  return (
    <View style={styles.container}>
      <Text style={styles.nuemro}>{coin}</Text>
      <Image
        style={styles.logo}
        source={Moeda}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    paddingTop: 15,
    width: '90%'
  },
  logo: {
    width: 18,
    height: 21,
  },
  nuemro: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 21
  }
});