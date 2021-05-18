import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, StatusBar } from 'react-native';

import Button from '../../../Components/Button';
import HistoricosDinheiro from '../../../Components/HistóricosDinheiro';
import COLORS from '../../../resources/colors';
import logoTransfer from '../../../assets/moedas/logoTransfer.png';
import FunctionalityService from '../../../services/FunctionalityService';
import PlayerService from '../../../services/PlayerService'
const Tela = Dimensions.get('screen').width;
export default function ConfirmarTransferencia({ navigation, route }) {
  const { count } = route.params;
  const { player } = route.params;
  const { idDest } = route.params;
  const makeTransfer = () => {
    PlayerService.getPlayer(idDest).then(resp => {
      // text = <HistoricosDinheiro player={player} count={count} dest={resp.name} />
      let text = 'Você transferiu ' + count + '$ para o ' + resp.name
       PlayerService.addTransfers(text,player)
      let text2 = 'Você recebeu ' + count + '$ do jogador ' + player.name
      PlayerService.addTransfers(text2,resp)
    });
    FunctionalityService.makeTransfer(player.id, idDest, count);
    player.coin -= count;
    navigation.reset({ routes: [{ name: 'TransferenciaConfirmada', params: { player, text:'Sua transferencia foi concluída com sucesso!' } }] });
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Fazer transferência</Text>
        <Image style={styles.logo} source={logoTransfer} />
        <Text style={styles.text}> Deseja confirmar a transação?</Text>
        <Text style={styles.text2}>{JSON.stringify(count)}$ </Text>
        <View style={{ marginVertical: 10 }}>
          <Button onClick={makeTransfer} name='CONTINUAR' />
          <TouchableOpacity onPress={() => navigation.reset({ routes: [{ name: 'MenuJogador', params: { id: player.id } }] })} style={styles.button}>
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
    backgroundColor: COLORS.bgColorPrimary,
    width: Tela,
    paddingTop: StatusBar.currentHeight
  },
  logo: {
    height: 180,
    width: 180,
    alignSelf: 'center',
    marginVertical: 50
  },
  text: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  text2: {
    fontFamily: 'Rubik_300Light',
    fontSize: 48,
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
