import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const Tela = Dimensions.get('screen').width;
export default function Quantidade({selectAmount, setSelectAmount}) {
  useEffect ( () => {
    if (selectAmount > 6) setSelectAmount(6);
  },[selectAmount]
  )
  return (
      <View style={styles.view}>
      <TouchableOpacity style={[styles.numeros, { backgroundColor: selectAmount >= 1 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectAmount(1)} activeOpacity={0.7}>
          <Text style={styles.numeros2}>1</Text>
        </TouchableOpacity>
      <TouchableOpacity style={[styles.numeros, { backgroundColor: selectAmount >= 2 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectAmount(2)} activeOpacity={0.7}>
          <Text style={styles.numeros2}>2</Text>
        </TouchableOpacity>
      <TouchableOpacity style={[styles.numeros, { backgroundColor: selectAmount >= 3 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectAmount(3)} activeOpacity={0.7}>
          <Text style={styles.numeros2}>3</Text>
        </TouchableOpacity>
      <TouchableOpacity style={[styles.numeros, { backgroundColor: selectAmount >= 4 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectAmount(4)} activeOpacity={0.7}>
          <Text style={styles.numeros2}>4</Text>
        </TouchableOpacity>
      <TouchableOpacity style={[styles.numeros, { backgroundColor: selectAmount >= 5 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectAmount(5)} activeOpacity={0.7}>
          <Text style={styles.numeros2}>5</Text>
        </TouchableOpacity>
      <TouchableOpacity style={[styles.numeros, { backgroundColor: selectAmount >= 6 ? "#8ACF3A" : '#fff' }]} onPress={() => setSelectAmount(6)} activeOpacity={0.7}>
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