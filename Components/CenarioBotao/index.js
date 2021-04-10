import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

import COLORS from '../../resources/colors';
import Papel from '../../assets/agricultorIcones/papel.png';

const Tela = Dimensions.get('screen').width;
export default function Cenarios({ onClick }) {
  const [isSelected3, setSelection3] = useState(false);
  return (
    <View style={{ height: 60, justifyContent: 'space-between', paddingVertical: 25, width: '95%', flexDirection: 'row', backgroundColor: COLORS.bgColorPrimary }}>
      <TouchableOpacity onPress={onClick}>
        <View style={[styles.resumo]}>
          <Image
            style={styles.logo}
            source={Papel}
          />
          <Text style={{ fontFamily: 'Rubik_300Light', fontSize: 12, paddingHorizontal: 5 }}> Resumo de cenário </Text>
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
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.textWhite,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
    marginHorizontal: 15,
  },
  candidato: {
    fontFamily: 'Rubik_300Light',
    fontSize: 12,
    paddingHorizontal: 20
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 15
  }
});