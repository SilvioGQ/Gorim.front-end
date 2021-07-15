import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { GameContext } from '../../context/GameContext';

import COLORS from '../../resources/colors';
import Button from '../../Components/Button';
import Clock from '../../assets/Logo/clock.png';

export default function AguardarJogadores() {

  const [playersAwait, setPlayersAwait] = useState(0);
  // const [players, setPlayers] = useState(1);
  const { players } = useContext(GameContext);

  const startVoting = () => {
    console.log('Começar votação!');
  }

  useEffect(() => {
    players.forEach(p => {
      if (p.state == 'await') setPlayersAwait(playersAwait + 1);
    });
  }, [players]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Clock} />
      <Text style={styles.texto}> Aguardando {'\n'} os outros jogadores...</Text>
      <View>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>{playersAwait}/{players.length}</Text>
        <Button onClick={startVoting} name='votar' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center'
  },
  logo: {
    height: 170,
    width: 160,
  },
  texto: {
    fontFamily: 'Rubik_300Light',
    fontWeight: 'normal',
    fontSize: 22,
    textAlign: 'center'
  }
});
