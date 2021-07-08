import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import COLORS from '../../resources/colors';
import IMAGES from '../../resources/imagesProducts';
export default function HistoricosPlatacao({ item }) {
  console.log(item)
  return (
    <View style={styles.container}>
      <Image style={styles.imageParcel} source={require('../../assets/agricultorIcones/Parcela.png')} />
      <Image style={{ position: 'absolute', width: 35, height: 35, top: 10, left: 13 }} source={IMAGES[item.product.seed]} />
      <Image style={styles.imageParcel} source={require('../../assets/agricultorIcones/Parcela.png')} />
      <Image style={{ position: 'absolute', width: 35, height: 35, top: 10, left: 70 }} source={IMAGES[item.product.fertilizer]} />
      <Image style={styles.imageParcel} source={require('../../assets/agricultorIcones/Parcela.png')} />
      <Image style={{ position: 'absolute', width: 35, height: 35, top: 10, left: 135 }} source={IMAGES[item.product.pesticide]} />
      <Image style={styles.imageParcel} source={require('../../assets/agricultorIcones/Parcela.png')} />
      <Image style={{ position: 'absolute', width: 35, height: 35, top: 10, left: 190 }} source={IMAGES[item.product.machine]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.bgColorPrimary,
    marginVertical: 10,
  },
  imageParcel: {
    height: 60,
    width: 60,
  },
});
