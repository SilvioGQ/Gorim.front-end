import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function FilterNew({ type, setType, nome1, nome2, nome3 = false }) {
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 20, width: '90%', justifyContent: 'space-between', marginVertical: 10 }}>

      {nome3 ?
        <>
          <TouchableOpacity style={[styles.button3, { backgroundColor: type == nome1 ? "#8ACF3A" : '#fff' }]} onPress={() => { setType(nome1) }} activeOpacity={0.7}>
            <Text style={[styles.textSmall, { color: type == nome1 ? '#fff' : '#000' }]}>{nome1}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button3, { backgroundColor: type == nome2 ? "#8ACF3A" : '#fff' }]} onPress={() => { setType(nome2) }} activeOpacity={0.7}>
            <Text style={[styles.textSmall, { color: type == nome2 ? '#fff' : '#000' }]}>{nome2}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button3, { backgroundColor: type == nome3 ? "#8ACF3A" : '#fff' }]} onPress={() => { setType(nome3) }} activeOpacity={0.7}>
            <Text style={[styles.textSmall, { color: type == nome3 ? '#fff' : '#000' }]}>{nome3}</Text>
          </TouchableOpacity>
        </>
        :
        <>
        <TouchableOpacity style={[styles.button, { backgroundColor: type == nome1 ? "#8ACF3A" : '#fff' }]} onPress={() => { setType(nome1) }}  >
        <Text style={[styles.textSmall, { color: type == nome1 ? '#fff' : '#000' }]}>{nome1}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: type == nome2 ? "#8ACF3A" : '#fff' }]} onPress={() => { setType(nome2) }}  >
        <Text style={[styles.textSmall, { color: type == nome2 ? '#fff' : '#000' }]}>{nome2}</Text>
      </TouchableOpacity>
      </>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '44%',
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
  },
  button3: {
    width: '30%',
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