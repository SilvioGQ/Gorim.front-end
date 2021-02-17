import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import Money from '../Dinheiro';
const Tela = Dimensions.get('screen').width

import Selo from '../../assets/moedas/Selo.png';
import Agricultor from '../../assets/perfils/agricultor/Agricultor2.png';
export default function Header(props) {
  return (
    <View style={styles.row3}>
      <Text style={styles.header}>{props.nome}{'\n'}em {props.cidade}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={styles.logo}
          source={Selo}
        />
        <Text style={{ fontSize: 21, fontFamily: 'Rubik_400Regular' }}>{props.Selo}</Text>
      </View>
      <View>
        <Money />
      </View>
      <Image
        style={styles.person}
        source={Agricultor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row3: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    margin: '3%',
    width: Tela
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 20,
  },
  textos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
    alignSelf: 'center'
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 14,
  },
  logo: {
    width: 20,
    height: 23
  },
  person: {
    width: 46,
    height: 50,
    marginRight: '5%'
  }
})
//alt shift f