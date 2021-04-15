import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import COLORS from '../../resources/colors';

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
    marginRight:10,
    marginVertical:10,
    backgroundColor: COLORS.textWhite,
    width: 96,
    height: 92,
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
    marginVertical:5
  },
  textinhos: {
    fontFamily: 'Rubik_300Light',
    fontSize: 11,
    textAlign:'center',
    marginHorizontal:5
  },
})
//alt shift f