import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import COLORS from '../../constants/colors';
import IMAGES from '../../constants/imagesProducts';
import IMAGES2 from '../../constants/imagesMenu';
const Height = Dimensions.get('screen').height;
const Tela = Dimensions.get('screen').width;
export default function Item({ onClick, backgroundColor = '#fff', name, type, notification = null }) {
  return (
    <TouchableOpacity onPress={onClick}  >
      <View style={[styles.colunm, { backgroundColor: backgroundColor }]}>
        {notification && <View style={[styles.notificacao]} />}
        <Image
          style={styles.icone}
          source={type == 'Produtos' ? IMAGES[name] : IMAGES2[name]}
        />
        <Text style={styles.textinhos}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  colunm: {
    alignItems: 'center',
    marginRight: 10,
    marginVertical: 10,
    backgroundColor: COLORS.textWhite,
    width: Tela > 350 ? 94 : 78,
    height: Tela > 350 ? 86 : 70,
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
  icone: {
    width: Tela > 350 ? 38 : 32,
    height: Tela > 350 ? 38 : 32,
    marginBottom: Height > 720 && Height < 800 ? 2 : 5,
    marginTop: 10.5
  },
  textinhos: {
    fontSize: Tela > 350 ? 10.5 : 8,
    textAlign: 'center',
    marginHorizontal: 5
  },
  notificacao: {
    position: 'absolute',
    left: 82,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F19F00',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.94,
    elevation: 6,
  }
})
//alt shift f
