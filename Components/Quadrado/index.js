import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLORS from '../../constants/colors';
import IMAGES from '../../constants/imagesIcons'
export default function Quadrados({ player = null, onClick, backgroundColor, color, icon=null, abr }) {
  return (
    <TouchableOpacity onPress={onClick}  >
      <View style={[styles.colunm, { backgroundColor: backgroundColor }]} >
        <Image style={styles.icone} source={player ? IMAGES[player.avatar] : IMAGES[icon]} />
        {player ? 
        <Text style={[styles.textinhos, { color: color }]}>{abr ? `${abr}/${player.name}` : player.name}</Text>
      :
      null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  colunm: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    backgroundColor: COLORS.textWhite,
    width: 90,
    height: 78,
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
    
    fontSize: 10,
  },
  icone: {
    width: 40,
    height: 40,
  },
});