import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native';
import { socketContext } from "../../context/socket";
import { playerContext } from "../../context/player";

import COLORS from '../../resources/colors';
import Button from '../../Components/Button';
import ModalConfirmExit from '../../Components/ModalConfirmExit';

const Tela = Dimensions.get('screen').width;
export default function Lobby({ navigation }) {

  const [ isLoading, setIsLoading ] = useState('FECTH_DATA');
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ room, setRoom ] = useState({});
  const player = useContext(playerContext);
  const socket = useContext(socketContext);

  useEffect(() => {
    if (isLoading === 'FECTH_DATA') socket.emit('getPlayers', r => setRoom(r));
    if (isLoading === 'BACK_PAGE') navigation.reset({ routes: [{ name: 'CriarPartida' }] });
    if (isLoading === 'NEXT_PAGE') navigation.reset({ routes: [{ name: 'SelecaoIcone' }] });
    if (room.inGame) setIsLoading('NEXT_PAGE');

    if (room.hasOwnProperty('sockets')) {

      room.sockets.filter(p => {
        if (player.getId() === p.id && player.getHost() != p.host) player.setHost();
      });
    }

  }, [room]);

  const deletePlayer = () => {
    setModalVisible(!modalVisible);
    socket.emit('removeFromRoom', () => setIsLoading('BACK_PAGE'));
  }

  const startGame = () => {
    socket.emit('startGame');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => setModalVisible(!modalVisible)}>
        <Image style={styles.image} source={require('../../assets/Logo/FecharPreto.png')} />
      </TouchableOpacity>
      <Text style={styles.text}>CÓDIGO DA SALA</Text>
      <View style={{ borderWidth: 1, width: '70%' }} />
      <Text style={[styles.text, { marginBottom: 25 }]}>{player.getRoom()}</Text>

      {!room.hasOwnProperty('sockets') ?
        <Text style={styles.text}>Aguardando jogadores</Text> :
        <FlatList
          data={room ? room.sockets : []}
          keyExtractor={(item, index) => item ? item.id.toString() : index.toString()}
          renderItem={({ item }) => {if(item) return <View style={styles.line}><Text style={styles.listText}>{item.name}</Text></View>}}
        />
      }
      { player.getHost() && <Button name='começar' onClick={startGame} /> }
      { modalVisible && <ModalConfirmExit deletePlayer={deletePlayer} onClick={() => setModalVisible(!modalVisible)} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    padding: '1%',
    paddingTop: 40,
    width: Tela
  },
  image: {
    width: 25,
    height: 27,
    marginRight: 20,
    marginTop: -10,
    marginVertical: 10
  },
  line: {
    paddingVertical: 10,
    borderWidth: 1,
    width: Tela - 75,
  },
  text: {
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
  },
});