import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { GameContext, removeToRoom, endStage, makeTransferOffice } from '../../contexts/GameContext';

import COLORS from '../../constants/colors';
import Header from '../../Components/Header';
import Item from '../../Components/Item';
import Cenarios from '../../Components/CenarioBotao';
import Rodada from '../../Components/Rodada';
import ModalConfirmExit from '../../Components/ModalConfirmExit';
import Modal from '../../Components/ModalInfo';
import ModalAsk from '../../Components/ModalAsk';

const Height = Dimensions.get('screen').height;
export default function MenuPolitico({ navigation }) {
  const [modalText, setModalText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const { players, player, awaitPlayers, stage, notify, round, phase } = useContext(GameContext);

  useEffect(() => {
    let isMounted = true;

    if (stage === 'NAVIGATEFORSTATUS') navigation.reset({ routes: [{ name: 'Status' }] });
    if (stage === 'NAVIGATEFORMENU') navigation.reset({ routes: [{ name: 'MenuJogador' }] });
    if (stage === 'NAVIGATEFORLOBBY') navigation.reset({ routes: [{ name: 'Lobby' }] });

    if (stage === 'REMOVEDTOROOM' && isMounted) navigation.reset({ routes: [{ name: 'Gorim' }] });
    if (stage === 'ENDSTAGE' && isMounted) navigation.reset({ routes: [{ name: 'AguardarJogadores' }] });
    
    return () => isMounted = false;
  }, [stage]);
  
  // makeTransferOffice(500, players[0].id == player.id ? players[1].id : players[0].id);

  const removeFromRoom = () => {
    setModalVisible(!modalVisible);
    removeToRoom();
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#58AB23'} StatusBarStyle='light-content' />
      <Rodada removeFromRoom={removeFromRoom} close={true} name={`${round}ª Rodada - ${phase}ª Etapa`} setModalVisible={setModalVisible} />
      <Header typeMenu="politic" />
      {modalVisible && <ModalConfirmExit deletePlayer={removeFromRoom} onClick={() => setModalVisible(!modalVisible)} />}
      {modalVisible2 && <ModalAsk finish={() => endStage()} back={() => setModalVisible2(!modalVisible2)} />}
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      <View style={styles.row}>
        {player.office === 'Prefeito' && (
          <View style={styles.items}>
            <Item type='' onClick={() => navigation.navigate('Prevencao')} name='Medidas de prevenção' />
            <Item type='' onClick={() => navigation.navigate('Imposto')} name='Alteração de impostos' />
            <Item type='' onClick={() => navigation.navigate('HistoricoJogadores')} name='Histórico dos Jogadores' />
          </View>
        )}
        {player.office === 'Fiscal' && (
          <View style={styles.items}>
            <Item type='' onClick={() => navigation.navigate('Selo')} name='Conceder selo verde' />
            <Item type='' onClick={() => navigation.navigate('Multa')} name='Aplicar multas' />
            <Item type='Menu' onClick={() => navigation.navigate('FazerTransferencia')} name='Fazer Transferência' />
          </View>
        )}
        {player.office === 'Prefeito' && (
          <View style={styles.items}>
            {player.office === 'Prefeito' && (<Item type='' onClick={() => navigation.navigate('Sugestoes')} name='Sugestões' />)}
            <Item type='Menu' onClick={() => navigation.navigate('FazerTransferencia')} name='Fazer Transferência' />
            <View style={{ marginRight: 10, marginVertical: 10, backgroundColor: COLORS.bgColorPrimary, width: 96, height: 92, borderRadius: 20 }} />
          </View>
        )}
      </View>
      <View style={{ paddingVertical: 25, flexDirection: 'row', }}>
        <Cenarios seeScenery={() => navigation.navigate('Cenario')} endStage={() => setModalVisible2(true)} notification={notify.scene} />
      </View>
      {awaitPlayers !== 0 && <Text style={{ color: 'red', marginTop: 45, fontFamily: 'Rubik_300Light' }}>{`${awaitPlayers} de ${players.length} jogadores já finalizaram`}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    backgroundColor: COLORS.headerColor,
    height: 65,
    width: '100%',
  },
  textLarge: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Rubik_300Light',
    marginTop: 20,
    marginLeft: 15
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 10,
    width: '100%',
    flexWrap: 'wrap'
  },
  row2: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    backgroundColor: COLORS.bgColorSecondary,
    width: '88%',
    height: 50,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 6,
  },
  items: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bar: {
    padding: 6,
    width: '89%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5
  },
  textBar: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 36,
    color: '#fff',
  },
  inferior: {
    fontSize: 18,
    fontFamily: 'Rubik_300Light',
    color: '#fff',
  },
});