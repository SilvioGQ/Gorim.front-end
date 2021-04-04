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
import Pacote from '../../assets/agricultorIcones/pacote.png'
import Pulverizador from '../../assets/agricultorIcones/pulverizador.png'
export default function Analizar() {
  const Info = [
    {
      name: 'Fertilizante Comum',
      icone: FertilizanteComum,
      cheap: 25,
      medium: 30,
      expensive: 35,
      pollution: 9
    },
    {
      name: 'Fertilizante Premium',
      icone: FertilizantePremium,
      cheap: 55,
      medium: 60,
      expensive: 65,
      pollution: 6
    },
    {
      name: 'Fertilizante Super Premium',
      icone: FertilizanteSuperPremium,
      cheap: 85,
      medium: 90,
      expensive: 95,
      pollution: 3
    },
    {
      name: 'Agrotoxico Comum',
      icone: AgrotoxicoComum,
      cheap: 5,
      medium: 10,
      expensive: 15,
      pollution: 3
    },
    {
      name: 'Agrotoxico Premium',
      icone: AgrotoxicoPremium,
      cheap: 15,
      medium: 20,
      expensive: 25,
      pollution: 2
    },
    {
      name: 'Agrotoxico Super Premium',
      icone: AgrotoxicoSuperPremium,
      cheap: 25,
      medium: 30,
      expensive: 35,
      pollution: 1
    },
    {
      name: 'Hortalicas',
      icone: Hortalicas,
      cheap: 5,
      medium: 10,
      expensive: 15,
      pollution: 3
    },
    {
      name: 'Soja',
      icone: Soja,
      cheap: 15,
      medium: 20,
      expensive: 25,
      pollution: 2
    },
    {
      name: 'Arroz',
      icone: Arroz,
      cheap: 25,
      medium: 30,
      expensive: 35,
      pollution: 1
    },
    {
      name: 'Pacote 1',
      icone: Pacote,
      cheap: 25,
      medium: 30,
      expensive: 35,
      pollution: 3
    },
    {
      name: 'Pacote 2',
      icone: Pacote,
      cheap: 55,
      medium: 60,
      expensive: 65,
      pollution: 6
    },
    {
      name: 'Pacote 3',
      icone: Pacote,
      cheap: 85,
      medium: 90,
      expensive: 95,
      pollution: 9
    },
    {
      name: 'Pulverizador',
      icone: Pulverizador,
      cheap: 295,
      medium: 300,
      expensive: 305,
      pollution: 40
    },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Produtos</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Info}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => <Produtos item={item} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela,
    paddingTop: 40
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    paddingVertical:10,
    textAlign: 'center',
  },
});