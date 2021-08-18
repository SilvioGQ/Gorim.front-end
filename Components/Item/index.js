import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import COLORS from '../../resources/colors';
import IMAGES from '../../resources/imagesProducts';
import IMAGES2 from '../../resources/imagesMenu';
export default function Item({ onClick, backgroundColor = '#fff', name, type, notification = null}) {
  return (
    <TouchableOpacity onPress={onClick} activeOpacity={0.7}>
      <View style={[styles.colunm, {backgroundColor:backgroundColor}]}>
        {notification && <View style={{position:'absolute', left:82, width: 18, height: 18, borderRadius: 9, backgroundColor: '#F19F00', shadowColor: "#000",shadowOffset: { width: 0, height: 2,}, shadowOpacity: 0.25, shadowRadius: 3.94,elevation: 6,}} />}
        <Image
          style={styles.icone}
          source={type == 'Produtos' ?  IMAGES[name] : IMAGES2[name]}
        />
        <Text style={styles.textinhos}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  colunm: {
    alignItems: 'center',
    marginRight:10,
    marginVertical:10,
    backgroundColor: COLORS.textWhite,
    width: 94,
    height: 86,
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
    width: 40,
    height: 40,
    marginVertical:5,
    marginTop:10,
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 11,
    textAlign:'center',
    marginHorizontal:5
  },
})
//alt shift f