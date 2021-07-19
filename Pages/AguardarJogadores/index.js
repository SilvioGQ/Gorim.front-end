import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { GameContext } from '../../context/GameContext';

import COLORS from '../../resources/colors';
import Button from '../../Components/Button';
import Clock from '../../assets/Logo/clock.png';

export default function AguardarJogadores() {

  const [playersAwait, setPlayersAwait] = useState(0);
  const { players, player } = useContext(GameContext);

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
      <View >
        <Text style={{ fontSize: 24, textAlign: 'center', marginTop:10, marginBottom:30 }}>{playersAwait}/{players.length}</Text>
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
