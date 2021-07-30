import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import COLORS from '../../resources/colors';
import IMAGES from '../../resources/imagesProducts';
export default function HistoricosPlatacao({ item }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageParcel} source={require('../../assets/agricultorIcones/Parcela.png')} />
      <Image style={{ position: 'absolute', width: 35, height: 35, top: 10, left: 13 }} source={IMAGES[item.product.seed]} />
      <Image style={styles.imageParcel} source={require('../../assets/agricultorIcones/Parcela.png')} />
      <Image style={{ position: 'absolute', width: 35, height: 35, top: 10, left: 70 }} source={IMAGES[item.product.fertilizer]} />
      {item.product.pesticide != null && (
        <>
          <Image style={styles.imageParcel} source={require('../../assets/agricultorIcones/Parcela.png')} />
          <Image style={{ position: 'absolute', width: 35, height: 35, top: 10, left: 135 }} source={IMAGES[item.product.pesticide]} />
        </>
      )}
      {item.product.machine != null && (
        <>
        <View style={{width: 60, height: 60}}/>
          <Image style={{ position: 'absolute', width: 35, height: 35, top: 10, left: 135 }} source={IMAGES[item.product.machine]} />
        </>
      )}
      {item.product.spray && (
        <>
          <Image style={{ width: 35, height: 35, marginLeft:10, marginTop:5 }} source={IMAGES['Pulverizador']} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.bgColorPrimary,
    marginVertical: 10,
  },
  imageParcel: {
    height: 60,
    width: 60,
  },
});
