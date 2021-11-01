import React, { useState } from 'react';
import { Text, View, StyleSheet, CheckBox, TouchableOpacity } from 'react-native';
export default function CheckBox1({callback,text, onValueChange}) {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  console.log(id)
  const handleCheckboxChange = (id) => {
    setSelectedIndex(id)
    if (onValueChange) {
      onValueChange(text, id);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CheckBox
          style={styles.checkbox}
          onValueChange={onValueChange}
          selectedIndex={selectedIndex}
          onCheckboxChange={handleCheckboxChange}
        />
        <TouchableOpacity onPress={() => {  }} activeOpacity={0.7}>
          <Text style={styles.candidato}>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  candidato: {
    fontFamily: 'Rubik_300Light',
    fontSize: 18,
    marginLeft: 10
  },
  checkbox: {
    height: 20,
    width: 20,
  }
});