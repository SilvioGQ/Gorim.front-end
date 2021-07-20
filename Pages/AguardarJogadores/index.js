import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { GameContext, removeToRoom } from '../../context/GameContext';

import COLORS from '../../resources/colors';
import Button from '../../Components/Button';
import Clock from '../../assets/Logo/clock.png';
import Rodada from '../../Components/Rodada';

export default function AguardarJogadores() {

  const { players, player, awaitPlayers } = useContext(GameContext);

  const startVoting = () => {
    console.log('Começar votação!');
  }

  const removeFromRoom = () => {
    setModalVisible(!modalVisible);
    removeToRoom();
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#58AB23'} StatusBarStyle='light-content' />
      <Rodada removeFromRoom={removeFromRoom} close={true} name={'Agurdando jogadores'} />
      <Image style={styles.logo} source={Clock} />
      <Text style={styles.texto}> Aguardando {'\n'} os outros jogadores...</Text>
      <View >
        <Text style={{ fontSize: 24, textAlign: 'center', marginTop:10, marginBottom:30 }}>{awaitPlayers}/{players.length}</Text>
        {player.host && <Button onClick={startVoting} name='votar' />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
  },
  logo: {
    height: 170,
    width: 160,
    alignSelf: 'center',
    marginVertical:10

  },
  texto: {
    fontFamily: 'Rubik_300Light',
    fontWeight: 'normal',
    fontSize: 22,
    textAlign: 'center',
    marginVertical:10
  }
});
