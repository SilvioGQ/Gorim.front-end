import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import Button from '../../../Components/Button';
import COLORS from '../../../styles/Colors'
import Trans from '../../../assets/moedas/trans.png';

const Tela = Dimensions.get('screen').width;
export default function FazerTransferencia({ navigation, route }) {
  const { count } = route.params;
  const { player } = route.params;

  const makeTransfer = () => {
    navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { player } }] })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Fazer transferência</Text>
      <Image
        style={styles.logo}
        source={Trans}
      />
      <Text style={styles.texto2}> Deseja confirmar a transação?  </Text>
      <Text style={styles.texto3}>{JSON.stringify(count)}$ </Text>
      <Button onClick={makeTransfer} name='CONTINUAR' />
      <View style={{ width: Tela }}>
        <TouchableOpacity onPress={() => navigation.reset({ routes: [{ name: 'MenuJogador', params: {id: player.id} }] })} style={styles.button}>
          <Text style={styles.textobuton}>CANCELAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    width: Tela,
    paddingTop: 75
  },
  logo: {
    height: 180,
    width: 180,
  },
  texto: {
    margin: 50,
    fontFamily: 'Rubik_400Regular',
    fontSize: 25,
    textAlign: 'center'
  },
  texto2: {
    margin: 33,
    fontFamily: 'Rubik_300Light',
    fontSize: 22,
    textAlign: 'center'
  },
  texto3: {
    fontFamily: 'Rubik_300Light',
    fontSize: 48,
    textAlign: 'center'
  },
  textobuton: {
    color: COLORS.textWhite,
    fontSize: 15,
    fontFamily: 'Rubik_400Regular',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  button: {
    height: 45,
    backgroundColor: COLORS.warningButton,
    borderRadius: 25,
    marginTop: -105,
    width: '80%',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,

    elevation: 6,
  }
});
