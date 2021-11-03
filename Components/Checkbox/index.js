import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, CheckBox, TouchableOpacity } from 'react-native';

import COLORS from '../../constants/colors';

export default function Candidato() {
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CheckBox
          value={isSelected}

          style={styles.checkbox}
        />
        <TouchableOpacity onPress={() => { setSelection(true); setSelection2(false); setSelection3(false) }} activeOpacity={0.7}>
          <Text style={styles.candidato}>Me candidato a prefeito!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <CheckBox
          value={isSelected2}
  
          style={styles.checkbox}
        />
        <TouchableOpacity onPress={() => { setSelection2(true); setSelection(false); setSelection3(false) }} activeOpacity={0.7}>
          <Text style={styles.candidato}>Me candidato a vereador!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <CheckBox
          value={isSelected3}
  
          style={styles.checkbox}
        />
        <TouchableOpacity onPress={() => { setSelection3(true); setSelection2(false); setSelection(false) }} activeOpacity={0.7}>
          <Text style={styles.candidato}>Me candidato a fiscal!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: 40
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10
  },
  candidato: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
    alignItems: 'center',
    marginHorizontal: 12
  },
  checkbox: {
    height: 25,
    width: 25,
    marginLeft: 10
  }
});