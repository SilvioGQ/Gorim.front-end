import React, { useState } from 'react';
import { CheckBox } from 'react-native';
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import COLORS from '../../styles/Colors'
import Papel from '../../assets/agricultorIcones/papel.png';

const Tela = Dimensions.get('screen').width;
export default function Cenarios({ onClick }) {
  const [isSelected3, setSelection3] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'space-around', padding: 10, width: Tela, flexDirection: 'row', backgroundColor: COLORS.bgColorPrimary, marginHorizontal: 15 }}>
      <TouchableOpacity onPress={onClick}>
        <View style={[styles.resumo, { justifyContent: 'space-between' }]}>
          <Image
            style={styles.logo}
            source={Papel}
          />
          <Text style={{ fontFamily: 'Rubik_300Light', fontSize: 12 }}> Resumo de cenário </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.resumo}>
        <Text style={styles.candidato}>Finalizar etapa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resumo: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: '1%',
    backgroundColor: COLORS.textWhite,
    height: 50,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  candidato: {
    fontFamily: 'Rubik_300Light',
    fontSize: 12,
    paddingHorizontal: 25

  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 15
  }
});