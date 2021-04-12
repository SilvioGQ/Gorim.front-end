import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import IMAGES from '../../resources/imagesProducts';
import COLORS from '../../resources/colors';

export default function Produtos({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.logo} source={IMAGES[item.name]} />
        <Text style={styles.textos}>{item.name}</Text>
      </View>
      <View style={{ width: '85%', flexDirection: 'row' }}>
        <View style={styles.row}>
          <Text style={styles.textinhos}>Preços:</Text>
          <Text style={styles.numeros}>{item.cheap}$</Text>
          <Text style={styles.numeros}>{item.medium}$</Text>
          <Text style={styles.numeros}>{item.expensive}$</Text>
        </View>
      </View>
          <View style={styles.poluicaoView}>
            <Image source={require('../../assets/agricultorIcones/Barril.png')} style={{ width: 22, height: 22, marginLeft: 5 }} />
            <Text style={styles.poluicao}>{item.pollution}</Text>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    backgroundColor: COLORS.textWhite,
    width: '90%',
    height: 115,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
    marginHorizontal: 20
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10
  },
  textos: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 16,
    alignSelf: 'center',
  },
  textinhos: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 18,
    marginLeft: 15
  },
  logo: {
    width: 35,
    height: 36,
    marginRight: 15
  },
  numeros: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18,
    marginVertical: 1,
    marginLeft: 10
  },
  poluicao: {
    fontSize: 22,
    fontFamily: 'Rubik_400Regular',
    color: '#FF0000'
  },
  poluicaoView: {
    flexDirection: 'row',
    position:'absolute',
    right:30,
    bottom:20
  }
});