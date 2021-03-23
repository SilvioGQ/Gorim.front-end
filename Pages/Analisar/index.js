import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Money from '../../Components/Dinheiro';
import Produtos from '../../Components/Produtos';
import COLORS from '../../styles/Colors';

const Tela = Dimensions.get('screen').width
export default function Analizar() {

  return (
    <View style={styles.container}>
      <Money />
      <Text style={styles.header}>Produtos</Text>
      <Produtos />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    padding: '2%',
    width: Tela,
    paddingTop: '8%'
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10
  },
});