import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function Item({ type, setType }) {
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 20, width: '90%', justifyContent: 'space-between', marginVertical: 10 }}>
      <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Agrotóxico' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Agrotóxico') }}  >
        <Text style={[styles.textSmall, { color: type == 'Agrotóxico' ? '#fff' : '#000' }]}>Agrotóxico</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Fertilizante' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Fertilizante') }}  >
        <Text style={[styles.textSmall, { color: type == 'Fertilizante' ? '#fff' : '#000' }]}>Fertilizante</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Máquina' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Máquina') }}  >
        <Text style={[styles.textSmall, { color: type == 'Máquina' ? '#fff' : '#000' }]}>Máquina</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Semente' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType('Semente') }}  >
        <Text style={[styles.textSmall, { color: type == 'Semente' ? '#fff' : '#000' }]}>Semente</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '22%',
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
  },
  textSmall: {
    textAlign: 'center',
    fontSize: 13,

    marginTop: 9
  },
})
