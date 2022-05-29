import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar, Dimensions, Image } from 'react-native';
import { GameContext, selectAvatar, selectedAvatars } from '../../../contexts/GameContext';

import COLORS from '../../../constants/colors';
import DETALHES from '../../../constants/imagesDetalhes';
import Quadrados from '../../../components/Quadrado'
import Button from '../../../components/Button';
import ModalInfo from '../../../components/ModalInfo';
import DetailsCaracter from '../../../components/DetailsCaracter';
const Height = Dimensions.get('screen').height;
export default function SelecaoPersonagem({ navigation }) {

  const [title, setTitle] = useState(true);
  const [modalText, setModalText] = useState('');
  const [screenDetails, setScreenDetails] = useState(true);
  const { players, player, stage, awaitPlayers } = useContext(GameContext);

  useEffect(() => {
    let isMounted = true;

    if (stage === 'NAVIGATEFORMENUPOLITIC') navigation.reset({ routes: [{ name: 'MenuPolitico' }] });
    if (stage === 'NAVIGATEFORMENU') navigation.reset({ routes: [{ name: 'MenuJogador' }] });
    if (stage === 'NAVIGATEFORLOBBY') navigation.reset({ routes: [{ name: 'Lobby' }] });

    if (stage === 'SELECTEDAVATARS' && isMounted) navigation.reset({ routes: [{ name: 'MenuJogador' }] });

    return () => isMounted = false;
  }, [players, stage]);

  const bgQuadrados = index => {
    let color = '#fff';
    for (let i = 0; i < players.length; i++) {
      if (players[i].avatar === index) { color = '#CBCBCB'; break; }
    }

    return player.avatar == index ? '#8ACF3A' : color;
  }

  const startGame = () => {
    if (players.length === awaitPlayers) {
      return selectedAvatars();
    }
    return setTitle(false), setModalText('Aguardando outros jogadores escolherem um avatar');
  }

  return (
    <View style={styles.container}>
        {screenDetails && (<DetailsCaracter player={player} screen={setScreenDetails}/>)}
        <Image style={styles.img} source={require('../../../assets/icons/tractor.png')}
></Image>
        <Text style={styles.title}>Bem vindo ao Gorim!</Text>
        <View>
          <Text style={styles.text}>Selecione um personagem</Text>
          {modalText !== '' && <ModalInfo player={player} onClick={() => setModalText('')} text={modalText} title={title} />}
          <View style={{ alignSelf: 'center' }}>
            <View style={styles.flexRow}>
              <Quadrados onClick={() => selectAvatar('Icon1')} backgroundColor={bgQuadrados('Icon1')} icon='Icon1' />
              <Quadrados onClick={() => selectAvatar('Icon2')} backgroundColor={bgQuadrados('Icon2')} icon='Icon2' />
              <Quadrados onClick={() => selectAvatar('Icon3')} backgroundColor={bgQuadrados('Icon3')} icon='Icon3' />
            </View>
            <View style={styles.flexRow}>
              <Quadrados onClick={() => selectAvatar('Icon4')} backgroundColor={bgQuadrados('Icon4')} icon='Icon4' />
              <Quadrados onClick={() => selectAvatar('Icon5')} backgroundColor={bgQuadrados('Icon5')} icon='Icon5' />
              <Quadrados onClick={() => selectAvatar('Icon6')} backgroundColor={bgQuadrados('Icon6')} icon='Icon6' />
            </View>
            <View style={styles.flexRow}>
              <Quadrados onClick={() => selectAvatar('Icon7')} backgroundColor={bgQuadrados('Icon7')} icon='Icon7' />
              <Quadrados onClick={() => selectAvatar('Icon8')} backgroundColor={bgQuadrados('Icon8')} icon='Icon8' />
              <Quadrados onClick={() => selectAvatar('Icon9')} backgroundColor={bgQuadrados('Icon9')} icon='Icon9' />
            </View>
            <View style={styles.flexRow}>
              <Quadrados onClick={() => selectAvatar('Icon10')} backgroundColor={bgQuadrados('Icon10')} icon='Icon10' />
              <Quadrados onClick={() => selectAvatar('Icon11')} backgroundColor={bgQuadrados('Icon11')} icon='Icon11' />
              <Quadrados onClick={() => selectAvatar('Icon12')} backgroundColor={bgQuadrados('Icon12')} icon='Icon12' />
            </View>
          </View>
        </View>
        <Text style={styles.textPlayersAmount}>{awaitPlayers} de {players.length}</Text>
        {player.host ?
          <View style={styles.marginButton}>
            <Button onClick={startGame} name='começar' />
          </View> :
          <Text style={styles.finalText}>{awaitPlayers === players.length ? 'AGUARDANDO HOST INICIAR' : 'AGUARDANDO JOGADORES.'}</Text>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    zIndex:1
  },
  title: {
    fontSize: 20,
    marginTop: '5%',
    textAlign: 'center',
  },
  img: {
    marginTop: 30,
    alignSelf: 'center',
    width: 55,
    height: 50
  },
  subtitle: {
    fontSize: Height > 700 ? 16 : 14,
    marginVertical: 10,
    textAlign: 'center',

  },
  textbutton: {
    padding: 8,
    paddingHorizontal: 10,
    fontSize: Height > 700 ? 12 : 11,
    textAlign: 'center',
    fontFamily: 'Rubik_400Regular',
  },
  text: {
    fontSize: Height > 700 ? 20 : 18,
    marginVertical: 25,
    marginHorizontal: '10%',
    textAlign: 'center',
    fontFamily: 'Rubik_400Regular'
  },
  textbold: {
    fontSize: Height > 700 ? 16 : 14,
    marginVertical: 15,
    textAlign: 'center',
    fontFamily: 'Rubik_700Bold'
  },
  button: {
    padding: 2,
    alignSelf: 'center',
    backgroundColor: COLORS.textWhite,
    borderRadius: 20,
    borderWidth: 0.7
  },
  finalText: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    fontFamily: 'Rubik_300Light'
  },
  marginButton: {
    alignItems: 'center',
    marginVertical: 10,
    position: 'absolute',
    bottom: 50
  },
  textPlayersAmount: {
    fontSize: 24,
    textAlign: 'center',
    position: 'absolute',
    bottom: 20
  },
  flexRow: {
    flexDirection: 'row'
  }
});
