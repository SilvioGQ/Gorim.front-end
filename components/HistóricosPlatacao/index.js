import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import COLORS from '../../constants/colors';
import IMAGES from '../../constants/imagesProducts';

export default function HistoricosPlatacao({ item }) {

  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{item.parcelLand.id + 1}º</Text>
      <View>
        <Image style={styles.imagensproduto} source={IMAGES[item.parcelLand.seed]} />
        <Text style={styles.textproduto}>{item.parcelLand.seed}</Text>
      </View>
      {item.parcelLand.fertilizer != null && (
        <View>
          <Image style={styles.imagensproduto} source={IMAGES[item.parcelLand.fertilizer]} />
          <Text style={styles.textproduto}>{item.parcelLand.fertilizer.replace(/Fertilizante /, '')}</Text>
        </View>
      )}
      {item.parcelLand.pesticide != null && (
        <View>
          <Image style={styles.imagensproduto} source={IMAGES[item.parcelLand.pesticide]} />
          <Text style={styles.textproduto}>{item.parcelLand.pesticide.replace(/Agrotóxico /, '')}</Text>
        </View>
      )}
      {item.parcelLand.machine != null && (
        <View>
          <Image style={styles.imagensproduto} source={IMAGES[item.parcelLand.machine]} />
          <Text style={styles.textproduto}>{item.parcelLand.machine}</Text>
        </View>
      )}
      {item.parcelLand.spray && (
        <View>
          <Image style={styles.imagensproduto} source={IMAGES['Pulverizador']} />
          <Text style={styles.textproduto}>Pulverizador</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#C8EEDE',
    marginVertical: 25,
    padding: 15,
    borderRadius: 17,
    marginTop: 15,
    marginBottom: 4
  },
  imagensproduto: {
    width: 35,
    height: 35,
    marginRight: 10,
    marginLeft: 10,
    alignSelf: 'center'
  },
  textproduto: {
    fontSize: 13,
    marginRight: 10,
    marginLeft: 10
  },
  numero: {
    fontSize: 16,
  },
});
