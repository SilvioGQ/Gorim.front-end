import React, { useState, useEffect, useContext} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { socketContext } from '../../context/socket';

import COLORS from '../../resources/colors';
import Clock from '../../assets/Logo/clock.png';

export default function AguardarJogadores() {

  const [playersEnd, setPlayersEnd] = useState(0);
  const [players, setPlayers] = useState(1);
  const socket = useContext(socketContext);

  useEffect(() => {
    socket.on('stepFinish', p => setPlayersEnd(p));
    socket.emit('getPlayers', p => setPlayers(p.length));
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Clock} />
      <Text style={styles.texto}> Aguardando resposta {'\n'} dos outros personagens..</Text>
      <View>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>{playersEnd}/{players}</Text>
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
    margin: 15,
    fontFamily: 'Rubik_300Light',

    fontWeight: 'normal',
    fontSize: 22,
    textAlign: 'center'
  }
});
