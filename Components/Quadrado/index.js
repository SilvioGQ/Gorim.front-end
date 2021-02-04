import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

import Agricultor2 from '../../assets/perfils/agricultor/Agricultor2.png';

const Tela = Dimensions.get('screen').width;
export default function Quadrados() {
  const [Selected, setSelected] = useState(-1)

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setSelected(0)}>
          <View style={[styles.colunm, { backgroundColor: Selected == 0 ? "#8ACF3A" : '#fff' }]} >
            <Image
              style={styles.icone}
              source={Agricultor2}
            />
            <Text style={styles.textinhos}> Agricultor </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(1)}>
          <View style={[styles.colunm, { backgroundColor: Selected == 1 ? "#8ACF3A" : '#fff' }]}>
            <Image
              style={styles.icone}
              source={Agricultor2}
            />
            <Text style={styles.textinhos}> Agricultor </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(2)}>
          <View style={[styles.colunm, { backgroundColor: Selected == 2 ? "#8ACF3A" : '#fff' }]} >
            <Image
              style={styles.icone}
              source={Agricultor2}
            />
            <Text style={styles.textinhos}> Agricultor </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(3)}>
          <View style={[styles.colunm, { backgroundColor: Selected == 3 ? "#8ACF3A" : '#fff' }]}>
            <Image
              style={styles.icone}
              source={Agricultor2}
            />
            <Text style={styles.textinhos}> Agricultor </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBFFFD',
    padding: 3,
    width: Tela
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 8,
    width: Tela,
    flexWrap: 'wrap'
  },
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5.6,
    backgroundColor: '#FFFFFF',
    width: 96,
    height: 84,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 14,
  },
  icone: {
    width: 40,
    height: 40,
  },
});