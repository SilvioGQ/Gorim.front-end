import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { GameContext, removeToRoom, } from '../../context/GameContext';

import COLORS from '../../resources/colors';
import Clock from '../../assets/Logo/clock.png';
import Rodada from '../../Components/Rodada';

export default function AguardarJogadores({ navigation }) {

  const { players, player, awaitPlayers, stage } = useContext(GameContext);
  const [round, setRound] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (stage === 'ENDROUND' && isMounted) navigation.navigate('Status');

    return () => isMounted = false;
  }, [stage]);

  const removeFromRoom = () => {
    setModalVisible(!modalVisible);
    removeToRoom();
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#58AB23'} StatusBarStyle='light-content' />
      <Rodada removeFromRoom={removeFromRoom} name={'Agurdando jogadores'} />
      <View style={styles.container2}>
        <Image style={styles.logo} source={Clock} />
        <Text style={styles.texto}> Aguardando {'\n'} os outros jogadores...</Text>
        <View>
          <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 10, marginBottom: 30, fontFamily: 'Rubik_300Light' }}>{awaitPlayers} de {players.length}</Text>
          {/* {player.host && <Button onClick={FinishRound} name='ver resumo' />} */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColorPrimary,
  },
  container2: {
    flex: 3,
    justifyContent: 'center'
  },

  logo: {
    height: 170,
    width: 160,
    alignSelf: 'center',
    marginVertical: 10

  },
  texto: {
    fontFamily: 'Rubik_300Light',
    fontWeight: 'normal',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 10
  }
});
