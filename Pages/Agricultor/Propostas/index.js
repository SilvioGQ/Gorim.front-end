import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import Coin from '../../../Components/Coin';
import Oferta from '../../../Components/Ofertas';
import COLORS from '../../../styles/Colors';

const Tela = Dimensions.get('screen').width
export default function Proposta({route}) {
  const { player } = route.params;
  return (
    <View style={styles.container}>
      <Coin coin={player.coin}/>
      <Text style={styles.header}> Ofertas</Text>
      <Oferta vendedor='Silvio' preço='80$' produto='Soja' />
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
    paddingTop: 25,
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    paddingTop: 10,
    marginVertical:15
  },
});