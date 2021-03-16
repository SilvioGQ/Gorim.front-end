import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import COLORS from '../../styles/Colors'
import Agricultor2 from '../../assets/perfils/agricultor/Agricultor2.png';

const Tela = Dimensions.get('screen').width;
export default function Quadrados({ onPress = null, player, onClick, backgroundColor }) {
  const [selected, setSelected] = useState(-1)

  const handleOnPress = (item, index) => {
    onPress();
    setSelected(index);
    console.log(item);
  }

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={[styles.colunm, { backgroundColor: backgroundColor }]} >
        <Image
          style={styles.icone}
          source={Agricultor2}
        />
        <Text style={styles.textinhos}> {player.name} </Text>
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