import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, } from 'react-native';
import { GameContext, makeTransfer } from "../../../../contexts/GameContext";

import Button from '../../../../components/Button';
import COLORS from '../../../../constants/colors';
import Rodada from '../../../../components/Rodada';

import normalizeNumber from '../../../../helpers/normalizeNumber';

const Tela = Dimensions.get('screen').width;
export default function ConfirmarTransferencia({ navigation, route }) {

  const { count, idDest, type, provider, nameDest } = route.params;
  const { game } = useContext(GameContext);
  const [confirmTransfer, setConfirmTransfer] = useState(false);

  useEffect(() => {
    if (confirmTransfer) {
      navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { text: 'Sua transferência foi concluída!' } }] });
    }

    return () => { if (confirmTransfer) makeTransfer(count, idDest, provider, type); }
  }, [confirmTransfer]);

  return (
    <View style={styles.container}>
      <Rodada arrow={true} onClick={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Fazer transferência</Text>
        <Image style={styles.logo} source={require('../../../../assets/symbols/transfer.png')} />
        <Text style={styles.text}> Deseja confirmar a transação para {nameDest}?</Text>
        <Text style={styles.text2}>${normalizeNumber(count)} </Text>
        <View style={{ marginVertical: 10 }}>
          <Button onClick={() => setConfirmTransfer(true)} name='CONTINUAR' />
          <TouchableOpacity onPress={() => navigation.reset({ routes: [{ name: game.phase === 1 ? 'MenuJogador' : 'MenuPolitico' }] })} style={styles.button}  >
            <Text style={styles.textButton}>CANCELAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    height: Tela > 350 ? 140 : 90,
    width: Tela > 350 ? 140 : 90,
    alignSelf: 'center',
    marginVertical: Tela > 350 ? 50 : 25
  },
  text: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  text2: {
    fontSize: Tela > 350 ? 48 : 24,
    textAlign: 'center',
    marginVertical: 20
  },
  textButton: {
    color: COLORS.textWhite,
    fontSize: 15,
    fontFamily: 'Rubik_400Regular',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  button: {
    height: 45,
    margin: '2%',
    alignSelf: 'center',
    backgroundColor: COLORS.warningButton,
    borderRadius: 25,
    width: '80%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,
    elevation: 2,
  }
});
