import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { GameContext, removeToRoom, } from '../../../contexts/GameContext';
import Rodada from '../../../Components/Rodada';
import ModalConfirmExit from '../../../Components/ModalConfirmExit';
import Modal from '../../../Components/ModalInfo';
import ModalAsk from '../../../Components/ModalAsk';

export default function AguardarJogadores({ navigation }) {
  const [modalText, setModalText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const { players, player, awaitPlayers, stage } = useContext(GameContext);

  useEffect(() => {
    let isMounted = true;
    if (stage === 'ALLFORENDSTAGE' && isMounted) navigation.reset({ routes: [{ name: 'Status' }] });
    if (stage === 'NEXTROUND' && isMounted) navigation.reset({ routes: [{ name: 'Status2' }] });
    if (stage === 'REMOVEDTOROOM' && isMounted) navigation.reset({ routes: [{ name: 'Gorim' }] });

    return () => isMounted = false;
  }, [stage]);

  const removeFromRoom = () => {
    setModalVisible(!modalVisible);
    removeToRoom();
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#58AB23'} StatusBarStyle='light-content' />
      <Rodada removeFromRoom={removeFromRoom} close={true} name={'Aguardando jogadores'} setModalVisible={setModalVisible} />
      {modalVisible && <ModalConfirmExit deletePlayer={removeFromRoom} onClick={() => setModalVisible(!modalVisible)} />}
      {modalVisible2 && <ModalAsk finish={() => { endStage(); stopCallback(); }} back={() => setModalVisible2(!modalVisible2)} />}
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      <View style={styles.container2}>
        <Image style={styles.logo} source={require('../../../assets/symbols/clock.png')} />
        <Text style={styles.texto}> Aguardando {'\n'} os outros jogadores...</Text>
        <View>
          <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 10, marginBottom: 30, fontFamily: 'Rubik_300Light' }}>{awaitPlayers} de {players.length}</Text>
          {/* {player.host && <Button onClick={FinishRound} name='ver resumo' />} */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 3,
    justifyContent: 'center'
  },

  logo: {
    height: 170,
    width: 160,
    alignSelf: 'center',
    marginVertical: 10

  },
  texto: {
    
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 10
  }
});
