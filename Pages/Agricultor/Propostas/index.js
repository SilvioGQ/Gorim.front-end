import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';

import Coin from '../../../Components/Coin';
import Oferta from '../../../Components/Oferta';
import COLORS from '../../../resources/colors';
import FunctionalityService from '../../../services/FunctionalityService';

const Tela = Dimensions.get('screen').width;
export default function Proposta({ route }) {
  const [offers, setOffers] = useState([]);
  const { player } = route.params;

  useEffect(() => {
    FunctionalityService.getOffers(player.room).then(setOffers);
  }, []);

  return (
    <View style={styles.container}>
      <Coin coin={player.coin} />
      <Text style={styles.header}>Propostas</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={offers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Oferta item={item} />}
      />
      {offers.length === 0 && (
        <Text>Você não tem nada!</Text>
      )}
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
    paddingTop: 25
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    paddingTop: 10
  },
});