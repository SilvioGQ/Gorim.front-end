import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';


export default function FilterNew({type, setType, nome1, nome2}) {
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 20, width: '90%', justifyContent: 'space-between', marginVertical: 10 }}>
      <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Agrotoxico' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType(nome1) }}  >
      <Text style={[styles.textSmall, { color: type == 'Agrotoxico' ? '#fff' : '#000' }]}>{nome1}</Text>
    </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: type == 'Fertilizante' ? "#8ACF3A" : '#fff' }]} onPress={() => { setType(nome2) }}  >
      <Text style={[styles.textSmall, { color: type == 'Fertilizante' ? '#fff' : '#000' }]}>{nome2}</Text>
    </TouchableOpacity>
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
  textSmall: {
    textAlign: 'center',
    fontSize: 13,
    
    marginTop: 9
  },
})