import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

import COLORS from '../../resources/colors';
import Papel from '../../assets/agricultorIcones/papel.png';

const Tela = Dimensions.get('screen').width;
export default function Cenarios({ onClick, notification }) {
  return (
    <View style={{ height: 60, justifyContent: 'space-between', width: '95%', flexDirection: 'row', backgroundColor: COLORS.bgColorPrimary }}>
      <TouchableOpacity onPress={onClick} style={{paddingVertical: 25}}>
        <View style={[styles.resumo]}>
          <Image
            style={styles.logo}
            source={Papel}
          />
          <Text style={{ fontFamily: 'Rubik_300Light', fontSize: 12, paddingHorizontal: 5 }}> Resumo de cenário </Text>
          {notification && <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: '#F19F00', marginTop: -40,  shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.94, elevation: 6, }} />}

        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClick} style={{paddingVertical: 25}}>
      <View style={styles.resumo}>
        <Text style={styles.candidato}>Finalizar etapa</Text>
      </View>
      </TouchableOpacity>
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
    borderRadius: 25,
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