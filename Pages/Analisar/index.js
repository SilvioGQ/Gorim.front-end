import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import Money from '../../Components/Dinheiro';
import Produtos from '../../Components/Produtos';
import COLORS from '../../styles/Colors';

const Tela = Dimensions.get('screen').width
import FertilizanteComum from '../../assets/fertilizers/fertilizerBasic.png';
import FertilizantePremium from '../../assets/fertilizers/fertilizerMedium.png';
import FertilizanteSuperPremium from '../../assets/fertilizers/fertilizerStandard.png';
import AgrotoxicoPremium from '../../assets/pesticides/pesticideMedium.png';
import AgrotoxicoComum from '../../assets/pesticides/pesticideBasic.png';
import AgrotoxicoSuperPremium from '../../assets/seeds/rice.png';
import Hortalicas from '../../assets/seeds/greenery.png';
import Soja from '../../assets/seeds/soy.png';
import Arroz from '../../assets/seeds/rice.png';
export default function Analizar() {
  const Nomes = ['FertilizanteComum', 'FertilizantePremium', 'FertilizanteSuperPremium', 'AgrotoxicoComum', 'AgrotoxicoPremium', 'AgrotoxicoSuperPremium', 'Hortalicas', 'Soja', 'Arroz']
  const Logos = [FertilizanteComum, FertilizantePremium, FertilizanteSuperPremium, AgrotoxicoComum, AgrotoxicoPremium, AgrotoxicoSuperPremium, Hortalicas, Soja, Arroz]
  const Preco1 = [25, 55, 85, 5, 15, 25, 5, 15, 25]
  const Preco2 = [30, 60, 90, 10, 20, 30, 10, 20, 30]
  const Preco3 = [35, 65, 95, 15, 25, 35, 15, 25, 35]
  const Poluicao = [9, 6, 3, 3, 2, 1, 1, 2, 3]
  const Info = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9
    },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Produtos</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Info}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => <Produtos nomes={item.nomes == Nomes[index]} logo={item.logo == Logos[index]} Preco1={item.Preco1 == Preco1[index]} Preco2={item.Preco2 == Preco2[index]} Preco3={item.Preco3 == Preco3[index]} Poluicao={item.Poluicao == Poluicao[index]} />
        }
      />
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