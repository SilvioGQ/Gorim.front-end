import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import COLORS from '../../constants/colors';
import ICONS from '../../constants/imagesIcons'
const Tela = Dimensions.get('screen').width;
export default function Quadrados({ player = null, onClick, backgroundColor, color, icon = null, abr }) {
  return (
    <TouchableOpacity onPress={onClick}  >

      <View style={[styles.colunm, { backgroundColor: backgroundColor }]} >
        {player ?
          <Text style={[styles.textinhos, { color: color }]}>{player.name}</Text>
          :
          null}
        <Image style={styles.icone} source={player ? ICONS[player.avatar] : ICONS[icon]} />
        {player ?
          <Text style={[styles.textinhos, { color: color }]}>{abr ? `${abr} - ${player.city}` : player.city}</Text>
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
    width: Tela > 350 ? 90 : 80,
    height: Tela > 350 ? 78 : 68,
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
    height: 44,
  },
});
