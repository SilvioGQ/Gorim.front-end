import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, AppState, YellowBox, TouchableOpacity, Image } from 'react-native';

import COLORS from '../../styles/Colors'
import Button from '../../Components/Button';
import PlayerService from '../../services/PlayerService';
import ModalHeader from '../../Components/Modal/ModalHeader';
import FunctionalityService from '../../services/FunctionalityService';

const Tela = Dimensions.get('screen').width;
export default function Lobby({ navigation, route }) {
  const [isMounted, setIsMounted] = useState(true);
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState(route.params);
  const [Game, setGame] = useState({});
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [modalVisible, setModalVisible] = useState(false);

  const updateHost = (players) => {
    let p = players.filter(item => {
      if (item.id === player.id) return item;
    });
    setPlayer(p[0]);
  }

  const deletePlayer = () => {
    setIsMounted(false);
    setModalVisible(!modalVisible);

    PlayerService.setHost(player.room);
    PlayerService.deletePlayer(player.id);
    FunctionalityService.deletePlayer(Game.id);
  }

  // useEffect(() => {
  //   AppState.addEventListener('change', _handleAppStateChange);

  //   return () => {
  //     AppState.removeEventListener('change', _handleAppStateChange);
  //   };
  //   YellowBox.ignoreWarnings(['Setting a timer']);
  // }, []);

  // const _handleAppStateChange = (nextAppState) => {
  //   if (
  //     appState.current.match(/active/)
  //   ) {
  //     console.log('dsifj')
  //   }
  //   if (
  //     appState.current.match(/inactive|background/) &&
  //     nextAppState === 'active'
  //   ) {
  //     console.log('Aplicativo aberto novamente');
  //   }

  //   appState.current = nextAppState;
  //   setAppStateVisible(appState.current);
  //   console.log('AppState', appState.current);
  // };

  // useEffect(() => {
  //   PlayerService.getPlayers(player.room).then(setPlayers);
  // });

  useEffect(() => {
    if(Game.inGame){
      navigation.reset({
        routes: [{ name: 'SorteioJogador', params: { player } }]
      });
  
      return () => setIsMounted(false);
    }

    if (isMounted) {
      setTimeout(() => {
        FunctionalityService.getRoom(player.room).then(setGame);
        
        if(Game.players != players.length) {

          PlayerService.getPlayers(player.room).then(resp => {
            if (players.length > 0) updateHost(resp);
            setPlayers(resp);
          });
        }
      }, 1000 * 1);
    } else {
      navigation.reset({ routes: [{ name: 'CriarPartida' }] });
    }
  }, [Game]);
  console.ignoredYellowBox = [
    'Setting a timer'
]
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => setModalVisible(!modalVisible)}>
        <Image style={{ width: 25, height: 27, marginRight: 20, marginTop: -10, marginVertical: 10 }} source={require('../../assets/Logo/FecharPreto.png')} />
      </TouchableOpacity>
      {modalVisible && (
        <ModalHeader deletePlayer={deletePlayer} text='Tem certeza que deseja sair da partida?' onClick={() => setModalVisible(!modalVisible)} />
      )}
      <Text style={styles.texto}>CÓDIGO DA SALA</Text>
      <View style={{ borderWidth: 1, width: '70%' }} />
      <Text style={styles.texto2}>{player.room}</Text>
      {players.length === 0 ?
        <Text style={styles.texto}>Aguardando jogadores</Text> :
        <FlatList
          data={players}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <View style={styles.linha}><Text style={styles.texto3}>{item.name}</Text></View>}
        />
      }
      {player.host ?
        <Button name='começar' onClick={() => FunctionalityService.startGame(player.room)} /> :
        <Text style={[styles.texto3, { marginBottom: 35 }]}>AGUARDANDO NOVOS JOGADORES</Text>}
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
  linha: {
    paddingVertical: 10,
    borderWidth: 1,
    width: Tela - 75,
  },
  texto: {
    fontSize: 32,
    fontFamily: 'Rubik_300Light',
    marginTop: 5,
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 32
  },
  texto2: {
    fontSize: 35,
    fontFamily: 'Rubik_300Light',
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 38,
    marginBottom: 35
  },
  texto3: {
    fontSize: 22,
    fontFamily: 'Rubik_300Light',
  },
});