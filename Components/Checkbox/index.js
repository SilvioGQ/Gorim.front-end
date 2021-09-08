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
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <TouchableOpacity onPress={() => { setSelection(!isSelected) }} activeOpacity={0.7}>
          <Text style={styles.candidato}>Me candidato a prefeito!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
        <TouchableOpacity onPress={() => { setSelection2(!isSelected2) }} activeOpacity={0.7}>
          <Text style={styles.candidato}>Me candidato a vereador!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
          style={styles.checkbox}
        />
        <TouchableOpacity onPress={() => { setSelection3(!isSelected3) }} activeOpacity={0.7}>
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
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    marginTop: 40
  },
  row: {
    flexDirection: 'row',
  },
  candidato: {
    fontFamily: 'Rubik_300Light',
    fontSize: 20,
    alignItems: 'center',
    marginHorizontal: 12
  },
  checkbox: {
    height: 20,
    width: 20,
    marginLeft: 10
  }
});