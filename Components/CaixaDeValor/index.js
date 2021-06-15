import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import COLORS from '../../resources/colors';

export default function CaixaDeValor({ value, setValue, increment, minValue = 0, maxValue = value + 1 }) {

  const increaseValue = () => setValue(value < maxValue ? value + increment : value);
  const decreaseValue = () => setValue(value > minValue ? value - increment : value);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decreaseValue}>
        <Image style={[styles.arrow, { opacity: value === minValue ? 0.5 : 1 }]} source={require('../../assets/agricultorIcones/setaesquerda.png')} />
      </TouchableOpacity>
      <View style={styles.buttonAmount}>
        <Text style={styles.textAmount}>{value}</Text>
      </View>
      <TouchableOpacity onPress={increaseValue}>
        <Image style={[styles.arrow, { opacity: value === maxValue ? 0.5 : 1 }]} source={require('../../assets/agricultorIcones/setadireita.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  arrow: {
    width: 46,
    height: 48
  },
  buttonAmount: {
    backgroundColor: COLORS.textWhite,
    borderWidth: 1,
    borderRadius: 20,
    height: 50,
    width: 180
  },
  textAmount: {
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Rubik_400Regular',
    fontSize: 25
  }
});