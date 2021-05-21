import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native';
import { socketContext } from "../../context/socket";
import { playerContext } from "../../context/player";

import COLORS from '../../resources/colors';
import Button from '../../Components/Button';
import ModalConfirmExit from '../../Components/ModalConfirmExit';

const Tela = Dimensions.get('screen').width;
export default function Lobby({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [room, setRoom] = useState({});
  const player = useContext(playerContext);
  const socket = useContext(socketContext);

  socket.on('PlayersFromRoom', r => setRoom(r));
  socket.on('changeHost', id => {
    if (id == player.getId()) player.setHost(true);
  });

  socket.on('onReady', p => {
    player.setCoin(p.coin);
    player.setCity(p.city);
    player.setType(p.type);
    if (p.speciality) player.setSpeciality(p.speciality);
    if (p.inventory) {
      player.setInventory(p.inventory);
      player.setParcelLand(p.parcelLand);
    }
    navigation.navigate('SelecaoIcone');
  });

  useEffect(() => {
    let obj = {
      sockets: [
        {
          id: player.getId(),
          name: player.getName()
        }
      ]
    };
    setRoom(obj);
  }, []);

  const removeFromRoom = () => {
    setModalVisible(!modalVisible);
    socket.emit('removeFromRoom', () => navigation.goBack());
  }

  const startGame = () => socket.emit('startGame');

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
          renderItem={({ item }) => { if (item) return <View style={styles.line}><Text style={styles.listText}>{item.name}</Text></View> }}
        />
      }
      { player.getHost() && <Button name='começar' onClick={startGame} />}
      { modalVisible && <ModalConfirmExit deletePlayer={removeFromRoom} onClick={() => setModalVisible(!modalVisible)} />}
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