import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const Tela = Dimensions.get('screen').width;
export default function Quantidade() {
  const [Selected, setSelected] = useState(-1)

  return (
      <View style={styles.view}>
        <TouchableOpacity style={[styles.numeros, { backgroundColor: Selected >= 0 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelected(0)}>
          <Text style={styles.numeros2}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.numeros, { backgroundColor: Selected >= 1 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelected(1)}>
          <Text style={styles.numeros2}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.numeros, { backgroundColor: Selected >= 2 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelected(2)}>
          <Text style={styles.numeros2}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.numeros, { backgroundColor: Selected >= 3 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelected(3)}>
          <Text style={styles.numeros2}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.numeros, { backgroundColor: Selected >= 4 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelected(4)}>
          <Text style={styles.numeros2}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.numeros, { backgroundColor: Selected >= 5 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelected(5)}>
          <Text style={styles.numeros2}>6</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  numeros: {
    width: 45,
    height: 45,
    borderRadius: 23,
    paddingVertical: 4,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 6
  },
  numeros2: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 30,
  },
  view: {
    flexDirection: 'row',
    width:'90%',
    marginHorizontal:20,
    justifyContent:'space-around',
    marginVertical:15,
  },
});