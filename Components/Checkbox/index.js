import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, CheckBox, TouchableOpacity } from 'react-native';

import COLORS from '../../constants/colors';

export default function Candidato() {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
     
      
      <TouchableOpacity style={styles.row} onPress={() => { setSelection(1); }}  >
          <Image
          source={isSelected ==1 ? require("../../assets/circleselect.png") : require("../../assets/circle.png")}
            style={styles.checkbox}
          />
          <Text style={styles.candidato}>Me candidato a prefeito! (0)</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => { setSelection(2); }}  >
        <Image
          source={isSelected == 2 ? require("../../assets/circleselect.png") : require("../../assets/circle.png")}
          style={styles.checkbox}
        />
        <Text style={styles.candidato}>Me candidato a vereador! (0)</Text>
      </TouchableOpacity>
 

      <TouchableOpacity style={styles.row} onPress={() => { setSelection(3); }}  >
        <Image
          source={isSelected == 3 ? require("../../assets/circleselect.png") : require("../../assets/circle.png")}
          style={styles.checkbox}
        />
        <Text style={styles.candidato}>Me candidato a fiscal! (0)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => { setSelection(4); }}  >
        <Image
          source={isSelected == 4 ? require("../../assets/circleselect.png") : require("../../assets/circle.png")}
          style={styles.checkbox}
        />
        <Text style={styles.candidato}>Não quero me candidatar. (0)</Text>
      </TouchableOpacity>
     
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
    
    fontSize: 20,
    alignItems: 'center',
    marginHorizontal: 12
  },
  checkbox: {
    height: 25,
    width: 25,
    marginLeft: 10,
  }
});