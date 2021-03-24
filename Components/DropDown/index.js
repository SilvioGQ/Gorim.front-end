import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import COLORS from '../../styles/Colors';

const Tela = Dimensions.get('screen').width;
export default function DropDown({ nome, nome2, nome3, image, image2, image3, onClick }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}
        style={[styles.Item, { backgroundColor: '#4E7E4D' }]}
      >
        <Image style={styles.icone} source={image} />
        <Text style={styles.text}>{nome}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClick}
        style={styles.Item}
      >
        <Image style={styles.icone} source={image2} />
        <Text style={styles.text}>{nome2}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClick}
        style={styles.Item}
      >
        <Image style={styles.icone} source={image3} />
        <Text style={styles.text}>{nome3}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 5,
    width: '50%'
  },
  Item: {
    height: 69,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#61CA65',
    width: '100%',
  },
  icone: {
    width: 30,
    height: 30,
    marginRight: 15
  },
  text: {
    fontFamily: 'Rubik_300Light',
    fontSize: 15,
    marginRight: 15
  }
})
