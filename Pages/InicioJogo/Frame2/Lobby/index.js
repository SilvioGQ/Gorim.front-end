import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';

import Button from '../../../../Components/Button/index'
import PlayerService from '../../../../firebase/services/PlayerService';

const Tela = Dimensions.get('screen').width;
export default function Lobby({ navigation, route }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    PlayerService.getPlayers().then(resp => setPlayers(resp));
  }, [players]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>CÓDIGO DA SALA</Text>
      <View style={{ borderWidth: 1, width: '70%' }} />
      <Text style={styles.texto2}>13KJ2F</Text>
      {players.length === 0 ?
        <Text style={styles.texto}>Aguardando jogadores</Text> :
        <FlatList
          data={players}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <View style={styles.linha}><Text style={styles.texto3}>{item.name}</Text></View>}
        />
      }
      <Button
        name='começar'
        onClick={() => navigation.navigate('Agricultor1')}
      //navigation.reset({
      //routes: [{ name: 'Agricultor1' }],
      //})
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBFFFD',
    alignItems: 'center',
    padding: '1%',
    paddingTop: 45,
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