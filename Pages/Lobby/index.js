import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native';
import { GameContext, removeToRoom, startGame, makeRaffle } from '../../context/GameContext';

import COLORS from '../../resources/colors';
import Button from '../../Components/Button';
import ModalConfirmExit from '../../Components/ModalConfirmExit';

const Tela = Dimensions.get('screen').width;
export default function Lobby({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const { players, player, inGame, stage } = useContext(GameContext);
  console.log(player.room);
  useEffect(() => {
    if (inGame && stage == 'STARTGAME') navigation.navigate('SorteioJogador');
    if (stage === 'REMOVEDTOROOM') navigation.goBack();
  }, [inGame, stage]);

  const removeFromRoom = () => {
    setModalVisible(!modalVisible);
    removeToRoom();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => setModalVisible(!modalVisible)}>
        <Image style={styles.image} source={require('../../assets/Logo/FecharPreto.png')} />
      </TouchableOpacity>
      <Text style={styles.textcod}>CÓDIGO DA SALA</Text>
      <View style={{ borderWidth: 1, width: '70%', borderColor: '#58AB23' }} />
      <Text style={[styles.text, { marginBottom: 25, marginTop: 15 }]}>{player.room}</Text>

      {modalVisible && <ModalConfirmExit deletePlayer={removeFromRoom} onClick={() => setModalVisible(!modalVisible)} />}
      {players.length === 0 ?
        <Text style={styles.text}>Aguardando jogadores</Text> :
        <FlatList
          data={players}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <View style={styles.line}><Text style={styles.listText}>{item.name}</Text></View>}
        />
      }
      {player.host ? 
        <Button name='começar' onClick={() => { startGame(); makeRaffle(); }} /> :
        <Text style={{
          fontSize: 20,
          marginVertical: 55,
          textAlign: 'center',
          fontFamily: 'Rubik_300Light'
        }}>AGUARDANDO JOGADORES.</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    paddingTop: 30 ,
    width: Tela
  },
  image: {
    width: 25,
    height: 27,
    marginRight: 20,
    marginVertical: 10
  },
  line: {
    paddingVertical: 10,
    borderWidth: 0.7,
    width: Tela - 75,
    borderRadius: 15,
    borderTopColor: '#139A2A',
    borderLeftColor: '#139A2A',
    borderBottomColor: '#139A2A',
    borderRightColor: '#139A2A'
  },
  text: {
    fontSize: 32,
    fontFamily: 'Rubik_300Light',
    marginTop: 5,
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 32
  },
  textcod: {
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'Rubik_300Light',
    marginTop: 5,
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 32
  },
  listText: {
    fontSize: 22,
    fontFamily: 'Rubik_300Light',
    marginLeft: 10,
  },
});