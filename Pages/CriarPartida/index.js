import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';

import COLORS from '../../styles/Colors';
import PlayerService from '../../services/PlayerService';
import { Batata } from '../Api';
import Modal from '../../Components/Modal/ModalFrame2';
import Group28 from '../../assets/Group28.png';
import Group29 from '../../assets/Group29.png';
import rightArrow from '../../assets/right-arrow.png';

const Tela = Dimensions.get('screen').width;
export default function CriarPartida({ navigation }) {
  const [modalText, setModalText] = useState('');
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const createRoom = () => {
    Batata().then(data => {
      if (name !== '') {
      let room = data.data;
      // setRoom(room);

      PlayerService.addPlayer(name, room, true).then(id => {
        navigation.reset({
          routes: [{
            name: 'Lobby',
            params: {
              name: name,
              room: room,
              id: id,
              host: true}
          }]
        });
      });
    } else{
      setModalText('Você precisa adicionar um nome')
    }
    }).catch(() => {
      setModalText('Erro ao criar partida!');
    })
    // Batata().then(data => { 
    //   setRoom(data.data);
      
    //   let id = PlayerService.addPlayer(name, room, true);
    //   setIdUser(id);
    //   navigation.navigate('Lobby', {
    //     name: name,
    //     room: room,
    //     id: id,
    //     host: true
    //   });
    // }).catch(() => {
    //   setModalText('Erro ao criar partida!');
    // });
  }

  const selectRoom = () => {
    PlayerService.getPlayers(room).then(resp => {

      if (resp.length >= 1) {
        if (resp.length < 10) {
          if (!resp[0].inGame) {
            if (name !== '') {
              PlayerService.addPlayer(name, room).then(id => {

                navigation.reset({
                  routes: [{
                    name: 'Lobby',
                    params: {
                      name: name,
                      room: room,
                      id: id,
                      host: false}
                  }]
                });
              });
            } else {
              setModalText('Você precisa adicionar um nome')
            }
          } else {
            setModalText('Sala está em partida!')
          }
        } else {
          setModalText('Sala atingiu número máximo de jogadores!')
        }
      } else {
        setModalText('Sala não encontrada!')
      }
    });
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        maxLength={15}
        onChangeText={name => setName(name)}
        placeholder="Digite seu nome"
        value={name}
      >
      </TextInput>
      <Text style={styles.header}>HOST</Text>
      <View style={styles.line} />
      <View style={styles.row}>
        <Image
          style={styles.logo2}
          source={Group28}
        />
        <TouchableOpacity
          style={styles.button2}
          onPress={createRoom}
        >
          <Text style={styles.text}>CRIAR JOGO</Text>
        </TouchableOpacity>
      </View>
      {modalText !== '' && (
        <Modal onClick={() => setModalText('')} text={modalText} />
      )}
      <Text style={[styles.header]}>ENTRAR</Text>
      <View style={styles.line} />
      <View style={styles.row}>
        <Image
          style={styles.logo2}
          source={Group29}
        />
        <TextInput
          maxLength={6}
          style={[styles.button2, styles.text2]}
          onChangeText={room => setRoom(parseInt(room))}
          placeholder='ESCREVER CÓDIGO'
          value={room.toString()}
          keyboardType='numeric'
        >
        </TextInput>
        <TouchableOpacity
          onPress={selectRoom}
        >
          <Image
            style={styles.arrow}
            source={rightArrow}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    paddingTop: 60,
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
    flex: 1,
    flexDirection: 'row',
    // alignSelf: 'space-between',
    // alignItems: 'space-between',
    // justifyContent: 'space-between',
    // margin: '4%',
  },
  header: {
    fontFamily: 'Rubik_300Light',
    fontSize: 24,
    lineHeight: 40,
    // alignSelf: 'center',
    marginTop: 40
  },
  logo2: {
    width: 85,
    height: 80,
    margin: 12
  },
  simbolo: {
    width: 30,
    height: 30
  },
  button2: {
    height: 45,
    borderRadius: 20,
    // margin: '2%',
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

    elevation: 6,
    marginTop: 30
  },
  text: {
    fontSize: 24,
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    // alignItems: 'center',
    marginTop: 5
  },
  text2: {
    fontSize: 18,
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    // alignItems: 'center',
  },
  arrow: {
    width: 25,
    height: 25,
    marginTop: 32,
    marginLeft: 10
  },
  line: { width: '80%', borderWidth: 1 }
});