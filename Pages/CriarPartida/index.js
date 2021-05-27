import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { socketContext } from '../../context/socket';
import { playerContext } from '../../context/player';

import COLORS from '../../resources/colors';
import ModalInfo from '../../Components/ModalInfo';

const Tela = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
export default function CriarPartida({ navigation }) {

  const [modalText, setModalText] = useState('');
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const socket = useContext(socketContext);
  const [player, setPlayer] = useContext(playerContext);

  const createRoom = () => {
    if (name === '') return setModalText('Você precisa adicionar um nome');

    socket.emit('addToRoom', name, handlePlayer);
  }

  const selectRoom = () => {
    if (name === '') return setModalText('Você precisa adicionar um nome');
    if (room === '') return setModalText('Você precisa adicionar o código da sala');

    socket.emit('joinToRoom', name, room, handlePlayer);
  }

  const handlePlayer = obj => {
    if (typeof obj !== 'object') return setModalText(obj);

    setPlayer(obj);
    navigation.navigate('Lobby');
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, height: Height - 100, alignItems: 'center', width: Tela }}>
          <TextInput style={styles.input}
            maxLength={15}
            onChangeText={name => setName(name)}
            placeholder="Digite seu nome"
            value={name}
          >
          </TextInput>
          <View style={{ alignItems: 'center', width: Tela, marginBottom: 50 }}>
            <Text style={styles.header}>HOST</Text>
            <View style={styles.line} />
            <View style={styles.row}>
              <Image style={styles.logo2} source={require('../../assets/Group28.png')} />
              <TouchableOpacity style={styles.button2} onPress={createRoom} >
                <Text style={styles.text}>CRIAR JOGO</Text>
              </TouchableOpacity>
              <Image style={[styles.arrow, { opacity: 0 }]} source={require('../../assets/right-arrow.png')} />
            </View>
          </View>
          {modalText !== '' && <ModalInfo onClick={() => setModalText('')} text={modalText} />}
          <View style={{ alignItems: 'center', width: Tela, marginVertical: 40 }}>
            <Text style={[styles.header]}>ENTRAR</Text>
            <View style={styles.line} />
            <View style={styles.row}>
              <Image style={styles.logo2} source={require('../../assets/Group29.png')} />
              <TextInput
                maxLength={6}
                style={[styles.button2, styles.text2]}
                onChangeText={room => setRoom(room.toUpperCase())}
                placeholder='ESCREVER CÓDIGO'
                value={room}
              >
              </TextInput>
              <TouchableOpacity onPress={selectRoom} >
                <Image style={styles.arrow} source={require('../../assets/right-arrow.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    paddingTop: 45,
    marginLeft: 5,
    width: Tela
  },
  input: {
    height: 45,
    fontSize: 24,
    borderWidth: 1,
    width: '80%',
    textAlign: 'center',
    borderRadius: 20
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontSize: 24,
    marginVertical: 10,
    marginTop: 30
  },
  logo2: {
    width: 101,
    height: 95,
    margin: 12
  },
  simbolo: {
    width: 30,
    height: 30
  },
  button2: {
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    width: 175,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 4.46,

    elevation: 3,
    backgroundColor: '#fff',
    marginTop: 30
  },
  text: {
    fontSize: 24,
    fontFamily: 'Rubik_300Light',
    marginTop: 5
  },
  text2: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
  },
  arrow: {
    width: 25,
    height: 25,
    marginTop: 35,
    marginLeft: 10
  },
  line: { width: '80%', borderWidth: 1 }
});