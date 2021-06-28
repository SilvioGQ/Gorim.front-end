import React, { useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { socketContext } from '../../context/socket';
import { playerContext } from '../../context/player';

import COLORS from '../../resources/colors';

export default function SorteioJogador({ navigation }) {

  const socket = useContext(socketContext);
  const [player, setPlayer] = useContext(playerContext);

  useEffect(() => {
    socket.on('makeRaffle', players => {
      players.filter(p => {
        if (p.id == player.id) setPlayer(() => ({ ...p }));
      });
      
      setTimeout(() => {
        navigation.navigate('SelecaoPersonagem');
      }, 2000);
    });
  
    socket.emit('makeRaffle');
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#58AB23'} StatusBarStyle='light-content' />
      <Text style={styles.header}>Gorim</Text>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/Logo/Dados.png')} />
        <Text style={styles.loading}>Sorteando Personagens...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.bgColorPrimary,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight
  },
  header: {
    fontFamily: 'Rubik_400Regular',
    fontWeight: 'normal',
    fontSize: 41.1111,
    lineHeight: 49,
    alignItems: 'center'
  },
  logo: {
    width: 180,
    height: 180
  },
  loading: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 22,
    lineHeight: 32,
    alignItems: 'center',
  }
});