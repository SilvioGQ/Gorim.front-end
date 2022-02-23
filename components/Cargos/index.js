import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GameContext } from '../../contexts/GameContext';
const Tela = Dimensions.get('screen').width;
export default function Cargos({isSelected, setSelection}) {

  const { stage, data: elections } = useContext(GameContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={() => { setSelection("Prefeito"); }}  >
          <Image
          source={isSelected == "Prefeito" ? require("../../assets/circleselect.png") : require("../../assets/circle.png")}
            style={styles.checkbox}
          />
          <Text style={styles.candidato}>Me candidato a prefeito! ({stage === 'GETELECTIONS' ? elections['mayor'].length : 0})</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => { setSelection("Vereador"); }}  >
        <Image
          source={isSelected == "Vereador" ? require("../../assets/circleselect.png") : require("../../assets/circle.png")}
          style={styles.checkbox}
        />
        <Text style={styles.candidato}>Me candidato a vereador! ({stage === 'GETELECTIONS' ? elections['cityCouncilor'].length : 0})</Text>
      </TouchableOpacity>
 

      <TouchableOpacity style={styles.row} onPress={() => { setSelection("Fiscal"); }}  >
        <Image
          source={isSelected == "Fiscal" ? require("../../assets/circleselect.png") : require("../../assets/circle.png")}
          style={styles.checkbox}
        />
        <Text style={styles.candidato}>Me candidato a fiscal! ({stage === 'GETELECTIONS' ? elections['supervisor'].length : 0})</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => { setSelection(null); }}  >
        <Image
          source={isSelected == null ? require("../../assets/circleselect.png") : require("../../assets/circle.png")}
          style={styles.checkbox}
        />
        <Text style={styles.candidato}>Não quero me candidatar.</Text>
      </TouchableOpacity>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop:5
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10
  },
  candidato: {
    fontSize: Tela > 350 ? 20 : 12,
    alignItems: 'center',
    marginHorizontal: 12
  },
  checkbox: {
    height: 25,
    width: 25,
    marginLeft: 10,
  }
});