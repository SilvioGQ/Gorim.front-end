import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import IMAGES from '../../resources/imagesProducts';
import COLORS from '../../resources/colors';

export default function Produtos({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.logo} source={IMAGES[item.name]} />
        <View>
          <Text style={styles.textos}>{item.name}</Text>
          {item.name == 'Pacote 1' && <Text style={styles.pacotes}>Semeadora</Text>}
          {item.name == 'Pacote 2' && <Text style={styles.pacotes}>Semeadora e Colheitadera</Text>}
          {item.name == 'Pacote 3' && <Text style={styles.pacotes}>Semeadora, Colheitadera e Drone</Text>}
        </View>
      </View>

      <View style={{
        position: 'absolute',

        left: 37, flexDirection: 'row'
      }}>
        <View style={[styles.row, { marginVertical: 3 }]}>
          <Text style={styles.textinhos}>Preços:</Text>
          {/* <Text style={styles.numeros}>{item.cheap}$</Text> */}
          <Text style={styles.numeros}>{item.medium}$</Text>
          {/* <Text style={styles.numeros}>{item.expensive}$</Text> */}
        </View>
      </View>
      {item.pollution ? <View style={styles.poluicaoView}>
        <Image source={require('../../assets/agricultorIcones/Barril.png')} style={{ width: 25, height: 25, marginRight: 2 }} />
        <Text style={styles.poluicao}>{item.pollution}</Text>
      </View> : <View></View>}

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
    marginVertical: 10,
    position: 'absolute',
    top: 10,
    left: 20
  },
  textos: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 16,
  },
  pacotes: {
    fontFamily: 'Rubik_300Light',
    fontSize: 13,
  },
  textinhos: {
    fontFamily: 'Rubik_700Bold',
    fontSize: 18,
    marginLeft: 15
  },
  logo: {
    width: 35,
    height: 35,
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
    position: 'absolute',
    right: 30,
    bottom: 20
  }
});