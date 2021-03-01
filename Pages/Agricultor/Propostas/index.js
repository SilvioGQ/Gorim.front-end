import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Money from '../../../Components/Dinheiro'
import Oferta from '../../../Components/Ofertas'
import COLORS from '../../../styles/Colors';

const Tela = Dimensions.get('screen').width
export default function Proposta() {
  return (
    <View style={styles.container}>
      <Money />
      <Text style={styles.header}> Ofertas</Text>
      <Oferta vendedor='Agricultor' preço='80$' produto='Soja' />
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