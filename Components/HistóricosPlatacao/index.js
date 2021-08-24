import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import COLORS from '../../resources/colors';
import IMAGES from '../../resources/imagesProducts';
export default function HistoricosPlatacao({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{item.product.id + 1}º</Text>
      <View>
      <Image style={styles.imagensproduto} source={IMAGES[item.product.seed]} />
        <Text style={styles.textproduto}>{item.product.seed}</Text>
      </View>
      {item.product.fertilizer != null &&( 
      <View>
      <Image style={styles.imagensproduto} source={IMAGES[item.product.fertilizer]} />
        <Text style={styles.textproduto}>{item.product.fertilizer.replace(/Fertilizante /,'')}</Text>
      </View>
      )}
      {item.product.pesticide != null && (
        <View>
          <Image style={styles.imagensproduto} source={IMAGES[item.product.pesticide]} />
          <Text style={styles.textproduto}>{item.product.pesticide.replace(/Agrotóxico /, '')}</Text>
        </View>
      )}
      {item.product.machine != null && (
        <View>
          <Image style={styles.imagensproduto} source={IMAGES[item.product.machine]} />
          <Text style={styles.textproduto}>{item.product.machine}</Text>
        </View>
      )}
      {item.product.spray && (
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
    marginVertical:25,
    padding: 15,
    borderRadius: 17,
    marginTop: 1,
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
