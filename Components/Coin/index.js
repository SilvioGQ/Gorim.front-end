import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import IMAGES from '../../constants/imagesCoins';
import normalizeNumber from '../../helpers/normalizeNumber'

export default function Coin({coin}) {
	
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Rubik_400Regular', fontSize: 19 }}>{normalizeNumber(coin)}</Text>
      <Image style={{ width: 20, height: 23 }} source={IMAGES["Moeda"]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    width: '90%'
  }
});