import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import COLORS from '../../styles/Colors';
import HandShake from '../../assets/agricultorIcones/handshake.png'
export default function Item(props) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={[styles.colunm, {backgroundColor:props.backgroundColor}]}>
        <Image
          style={styles.icone}
          source={props.icone}
        />
        <Text style={styles.textinhos}>{props.texto}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: COLORS.bgColorSecondary,
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
  icone: {
    width: 40,
    height: 40,
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 14,
    textAlign:'center'
  },
})
//alt shift f