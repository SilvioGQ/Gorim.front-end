import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native';
import { GameContext, removeToRoom, startGame } from '../../../contexts/GameContext';

import COLORS from '../../../constants/colors';
import Button from '../../../Components/Button';
import ModalConfirmExit from '../../../Components/ModalConfirmExit';

const Tela = Dimensions.get('screen').width;
export default function Lobby({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const { players, awaitPlayers, player, stage } = useContext(GameContext);

  useEffect(() => {
    let isMounted = true;
    
    if (stage === 'NAVIGATEFORSELECTIONAVATARS') navigation.reset({ routes: [{ name: 'SelecaoPersonagem' }] });
    if (stage === 'NAVIGATEFORMENU') navigation.reset({ routes: [{ name: 'MenuJogador' }] });
    if (stage === 'NAVIGATEFORMENUPOLITIC') navigation.reset({ routes: [{ name: 'MenuPolitico' }] });
    if (stage === 'NAVIGATEFORSTATUS') navigation.reset({ routes: [{ name: 'Status' }] });

    if (stage == 'STARTGAME' && isMounted) navigation.reset({ routes: [{ name: 'SorteioJogador' }] });
    if (stage === 'REMOVEDTOROOM' && isMounted) navigation.reset({ routes: [{ name: 'Gorim' }] });
    
    return () => isMounted = false;
  }, [stage]);

  const removeFromRoom = () => {
    setModalVisible(!modalVisible);
    removeToRoom();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => setModalVisible(!modalVisible)}  >
        <Image style={styles.image} source={require('../../../assets/FecharPreto.png')} />
      </TouchableOpacity>
      <Text style={styles.textcod}>CÓDIGO DA SALA</Text>
      <View style={{ borderWidth: 1, width: '70%', borderColor: '#58AB23' }} />
      <Text style={[styles.text, { marginBottom: 25, marginTop: 15 }]}>{player.room}</Text>

      {modalVisible && <ModalConfirmExit deletePlayer={removeFromRoom} onClick={() => setModalVisible(!modalVisible)} />}
      {players.length === 0 ?
        <Text style={styles.text}>Aguardando jogadores</Text> :
        <FlatList
          data={players}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <View style={styles.line}><Text style={styles.listText}>{item.name}</Text></View>}
        />
      }
      {player.host ? 
      <>

        <Button name='começar' onClick={() => startGame()} />
        <Text style={{fontSize:24, color:players.length > 5 ? COLORS.successButton : COLORS.warningButton, textAlign:'center', marginBottom:30}}>{awaitPlayers} de 10 jogadores</Text>
        </> :
        <Text style={{
          fontSize: 20,
          marginVertical: 55,
          textAlign: 'center',
          fontFamily: 'Rubik_300Light'
        }}>{10 === players.length ? 'AGUARDANDO HOST INICIAR.' : 'AGUARDANDO JOGADORES.'}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30 ,
    width: Tela
  },
  image: {
    width: 25,
    height: 27,
    marginRight: 20,
    marginVertical: 10
  },
  line: {
    paddingVertical: 10,
    borderWidth: 0.9,
    width: Tela - 75,
    borderRadius: 15,
    borderTopColor: '#139A2A',
    borderLeftColor: '#139A2A',
    borderBottomColor: '#139A2A',
    borderRightColor: '#139A2A'
  },
  text: {
    fontSize: 32,
    
    marginTop: 5,
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 32
  },
  textcod: {
    fontWeight: 'bold',
    fontSize: 32,
    
    paddingTop: 7,
    textAlign: 'center',
    alignItems: 'center',
    lineHeight: 32
  },
  listText: {
    fontSize: 22,
    
    marginLeft: 10,
  },
});