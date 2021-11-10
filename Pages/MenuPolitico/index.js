import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { GameContext, removeToRoom, endRound } from '../../contexts/GameContext';

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
    if (stage === 'ENDROUND' && isMounted) navigation.reset({ routes: [{ name: 'AguardarJogadores' }] });

    return () => isMounted = false;
  }, [stage]);

  const removeFromRoom = () => {
    setModalVisible(!modalVisible);
    removeToRoom();
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: notify.suggests ? 'red' : 'yellow'}}>Teste</Text>
      <StatusBar backgroundColor={'#58AB23'} StatusBarStyle='light-content' />
      <Rodada removeFromRoom={removeFromRoom} close={true} name={`${round}ª Rodada - ${phase}ª Etapa`} setModalVisible={setModalVisible} />
      <Header typeMenu="politic" />
      {modalVisible && <ModalConfirmExit deletePlayer={removeFromRoom} onClick={() => setModalVisible(!modalVisible)} />}
      {modalVisible2 && <ModalAsk finish={() => endRound()} back={() => setModalVisible2(!modalVisible2)} />}
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      <View style={styles.row}>
        {player.office === 'Prefeito' || player.office === 'Vereador' ?
          <>
            <View style={styles.items}>
              <Item type='' onClick={() => navigation.navigate('Prevencao')} name='Medidas de prevenção' />
              <Item type='' onClick={() => navigation.navigate('Imposto')} name='Alteração de impostos' />
              <Item type='' onClick={() => navigation.navigate('HistoricoJogadores')} name='Histórico dos Jogadores' />
            </View>
            <View style={styles.items}>
              <Item type='' onClick={() => navigation.navigate('Sugestoes')} name='Sugestões' />
              <Item type='Menu' onClick={() => navigation.navigate('FazerTransferencia')} name='Fazer Transferência' />
              <View style={{ marginRight: 10, marginVertical: 10, backgroundColor: COLORS.bgColorPrimary, width: 96, height: 92, borderRadius: 20 }} />
            </View>
          </>
          :
          null
        }
        {player.office === 'Fiscal' && (
          <View style={styles.items}>
            <Item type='' onClick={() => navigation.navigate('Selo')} name='Conceder selo verde' />
            <Item type='' onClick={() => navigation.navigate('Multa')} name='Aplicar multas' />
            <Item type='Menu' onClick={() => navigation.navigate('FazerTransferencia')} name='Fazer Transferência' />
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
  row: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 10,
    width: '100%',
    flexWrap: 'wrap'
  },
  items: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});