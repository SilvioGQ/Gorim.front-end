import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import COLORS from '../../resources/colors';
import Agricultor2 from '../../assets/perfils/agricultor/Agricultor2.png';

export default function Quadrados({ player, onClick, backgroundColor,icon }) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={[styles.colunm, { backgroundColor: backgroundColor }]} >
        <Image style={styles.icone} source={icon} />
        <Text style={styles.textinhos}>{player.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: COLORS.textWhite,
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

    elevation: 6
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