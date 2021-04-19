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
    FunctionalityService.getOffers(player.id).then(setOffers);
  }, [offers]);

  const confirmOffer = item => {
    let count = 0;

    player.inventory.filter(i => {
      if(item.product == i.name) {
        i.amount++;
      } else { count++; }
    });
    if(count == player.inventory.length) player.inventory.push({ type: item.type, name: item.product, amount: 1});
    
    FunctionalityService.confirmOffer(item);
  }

  return (
    <View style={styles.container}>
      <Coin coin={player.coin} />
      <Text style={styles.header}>Propostas</Text>
      {offers.length === 0 && (
        <Text style={{flex:1, textAlign:'center',  fontFamily:'Rubik_700Bold', fontSize:26, marginVertical:50}}>Você não tem nada!</Text>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={offers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Oferta item={item} confirmOffer={confirmOffer} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela,
    paddingTop: 25
  },
  header: {
    fontFamily: 'Rubik_300Light',
        textAlign: 'center',
    fontSize: 24,
    paddingTop: 10
  },
});